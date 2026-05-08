'use client';

import { useEffect, useRef } from 'react';

type Props = {
  pdbId?: string;
  accent?: string;
  surfaceAccent?: string;
  className?: string;
  spinSpeed?: number;
  zoom?: number;
  initialRotationY?: number;
  /**
   * "solid" = single-color cartoon using `accent`.
   * "spectrum" = rainbow N→C terminus (violet → blue → green → yellow → red).
   */
  mode?: 'solid' | 'spectrum';
  showSurface?: boolean;
  /** Default 12. Drop to 6 on secondary viewers for perf. */
  quality?: number;
};

type Viewer = {
  addModel: (data: string, fmt: string) => void;
  setStyle: (sel: object, style: object) => void;
  addSurface: (type: number, style: object) => void;
  zoomTo: () => void;
  zoom: (f: number) => void;
  spin: (axis: string | boolean, speed?: number) => void;
  rotate?: (angle: number, axis?: string) => void;
  render: () => void;
  resize: () => void;
  clear: () => void;
};

export default function ProteinViewer({
  pdbId = '1HHO',
  accent = '#7C5CFF',
  surfaceAccent,
  className = '',
  spinSpeed = 0.25,
  zoom = 1.05,
  initialRotationY = 0,
  mode = 'solid',
  showSurface = true,
  quality = 12,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    let cancelled = false;
    let ro: ResizeObserver | null = null;
    let io: IntersectionObserver | null = null;

    const host = hostRef.current;
    if (!host) return;

    const dpr = Math.min(
      typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
      2,
    );

    const applyHd = () => {
      const canvas = host.querySelector<HTMLCanvasElement>('canvas');
      if (!canvas) return;
      const w = canvas.clientWidth || host.clientWidth;
      const h = canvas.clientHeight || host.clientHeight;
      if (!w || !h) return;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    (async () => {
      const mod = await import('3dmol/build/3Dmol.js');
      const $3Dmol = (mod as unknown as { default?: unknown }).default ?? mod;
      if (cancelled || !hostRef.current) return;

      const api = $3Dmol as unknown as {
        createViewer: (
          el: HTMLElement,
          cfg: Record<string, unknown>,
        ) => Viewer;
      };

      const viewer = api.createViewer(hostRef.current, {
        backgroundColor: 'rgba(0,0,0,0)',
        backgroundAlpha: 0,
        antialias: true,
        hd: true,
      });
      viewerRef.current = viewer;

      if (dpr > 1) applyHd();

      const res = await fetch(`https://files.rcsb.org/download/${pdbId}.pdb`);
      const pdb = await res.text();
      if (cancelled) return;

      viewer.addModel(pdb, 'pdb');

      const cartoonStyle = {
        opacity: 1.0,
        thickness: 0.8,
        arrows: true,
        quality,
        smoothSheet: true,
      };

      if (mode === 'spectrum') {
        viewer.setStyle(
          {},
          { cartoon: { ...cartoonStyle, color: 'spectrum' } },
        );
        if (showSurface) {
          viewer.addSurface(2, { opacity: 0.14, color: 'spectrum' });
        }
      } else {
        viewer.setStyle({}, { cartoon: { ...cartoonStyle, color: accent } });
        if (showSurface) {
          viewer.addSurface(2, {
            opacity: 0.18,
            color: surfaceAccent ?? accent,
          });
        }
      }

      viewer.zoomTo();
      viewer.zoom(zoom);
      if (initialRotationY) viewer.rotate?.(initialRotationY, 'y');
      viewer.render();

      // Only spin when visible. Massive perf win with multiple viewers on a
      // page — the off-screen product-card viewers stop eating frames while
      // the user is up in the hero. Skip the observer entirely when the
      // caller asked for a static frame (spinSpeed=0) so we never pay for
      // the render loop on mobile backdrop viewers.
      if (spinSpeed > 0) {
        let isVisible = false;
        io = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting && !isVisible) {
                isVisible = true;
                viewerRef.current?.spin('y', spinSpeed);
              } else if (!entry.isIntersecting && isVisible) {
                isVisible = false;
                viewerRef.current?.spin(false);
              }
            }
          },
          { threshold: 0, rootMargin: '100px' },
        );
        io.observe(host);
      }

      ro = new ResizeObserver(() => {
        viewerRef.current?.resize();
        if (dpr > 1) applyHd();
        viewerRef.current?.render();
      });
      ro.observe(hostRef.current);
    })();

    return () => {
      cancelled = true;
      ro?.disconnect();
      io?.disconnect();
      try {
        viewerRef.current?.clear();
        viewerRef.current = null;
      } catch {
        /* noop */
      }
    };
  }, [
    pdbId,
    accent,
    surfaceAccent,
    spinSpeed,
    zoom,
    initialRotationY,
    mode,
    showSurface,
    quality,
  ]);

  return (
    <div
      ref={hostRef}
      className={`pointer-events-none relative h-full w-full ${className}`}
      aria-hidden
    />
  );
}
