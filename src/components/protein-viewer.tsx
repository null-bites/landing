'use client';

import { useEffect, useRef } from 'react';

type Props = {
  pdbId?: string;
  accent?: string;
  surfaceAccent?: string;
  className?: string;
  spinSpeed?: number;
  zoom?: number;
  mode?: 'solid' | 'spectrum';
  showSurface?: boolean;
  interactive?: boolean;
};

type Viewer = {
  addModel: (data: string, fmt: string) => void;
  setStyle: (sel: object, style: object) => void;
  addSurface: (type: number, style: object) => void;
  zoomTo: () => void;
  zoom: (f: number) => void;
  spin: (axis: string | boolean, speed?: number) => void;
  render: () => void;
  resize: () => void;
  clear: () => void;
};

export default function ProteinViewer({
  pdbId = '1HHO',
  accent = '#0E8F85',
  surfaceAccent,
  className = '',
  spinSpeed = 0.25,
  zoom = 1.05,
  mode = 'solid',
  showSurface = true,
  interactive = true,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    let cancelled = false;
    let ro: ResizeObserver | null = null;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;

    const host = hostRef.current;
    if (!host) return;

    // Prevent wheel events from reaching 3Dmol (which would zoom + block page
    // scroll). Capture-phase stopPropagation intercepts before 3Dmol's own
    // handlers attached to the inner canvas.
    const blockWheel = (e: WheelEvent) => e.stopPropagation();
    host.addEventListener('wheel', blockWheel, { capture: true, passive: true });

    const pauseSpin = () => {
      const v = viewerRef.current;
      if (!v) return;
      if (resumeTimer) clearTimeout(resumeTimer);
      v.spin(false);
    };
    const resumeSpin = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        const v = viewerRef.current;
        if (!v) return;
        v.spin('y', spinSpeed);
      }, 900);
    };

    if (interactive) {
      host.addEventListener('pointerdown', pauseSpin);
      host.addEventListener('pointerup', resumeSpin);
      host.addEventListener('pointercancel', resumeSpin);
      host.addEventListener('pointerleave', resumeSpin);
    }

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
        nomouse: !interactive,
      });
      viewerRef.current = viewer;

      // Force the underlying canvas to render at devicePixelRatio for crisp,
      // non-pixelated ribbons on Retina / high-DPR displays. 3Dmol's `hd:true`
      // flag helps but we also manually rescale the canvas backing store.
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const canvas = hostRef.current.querySelector<HTMLCanvasElement>('canvas');
      if (canvas && dpr > 1) {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
      }

      const res = await fetch(`https://files.rcsb.org/download/${pdbId}.pdb`);
      const pdb = await res.text();
      if (cancelled) return;

      viewer.addModel(pdb, 'pdb');

      if (mode === 'spectrum') {
        viewer.setStyle(
          {},
          {
            cartoon: {
              color: 'spectrum',
              opacity: 1.0,
              thickness: 0.55,
              arrows: true,
              quality: 12,
              ribbon: true,
              smoothSheet: true,
            },
          },
        );
        if (showSurface) {
          viewer.addSurface(2, { opacity: 0.14, color: 'spectrum' });
        }
      } else {
        viewer.setStyle(
          {},
          {
            cartoon: {
              color: accent,
              opacity: 1.0,
              thickness: 0.55,
              arrows: true,
              quality: 12,
              ribbon: true,
              smoothSheet: true,
            },
          },
        );
        if (showSurface) {
          viewer.addSurface(2, { opacity: 0.18, color: surfaceAccent ?? accent });
        }
      }

      viewer.zoomTo();
      viewer.zoom(zoom);
      viewer.spin('y', spinSpeed);
      viewer.render();

      const applyHd = () => {
        const c = hostRef.current?.querySelector<HTMLCanvasElement>('canvas');
        if (!c) return;
        const w = c.clientWidth;
        const h = c.clientHeight;
        if (!w || !h) return;
        c.width = Math.round(w * dpr);
        c.height = Math.round(h * dpr);
        c.style.width = `${w}px`;
        c.style.height = `${h}px`;
      };

      ro = new ResizeObserver(() => {
        viewerRef.current?.resize();
        if (dpr > 1) applyHd();
        viewerRef.current?.render();
      });
      ro.observe(hostRef.current);
    })();

    return () => {
      cancelled = true;
      if (resumeTimer) clearTimeout(resumeTimer);
      ro?.disconnect();
      host.removeEventListener('wheel', blockWheel, { capture: true });
      if (interactive) {
        host.removeEventListener('pointerdown', pauseSpin);
        host.removeEventListener('pointerup', resumeSpin);
        host.removeEventListener('pointercancel', resumeSpin);
        host.removeEventListener('pointerleave', resumeSpin);
      }
      try {
        viewerRef.current?.clear();
        viewerRef.current = null;
      } catch {
        /* noop */
      }
    };
  }, [pdbId, accent, surfaceAccent, spinSpeed, zoom, mode, showSurface, interactive]);

  return (
    <div
      ref={hostRef}
      className={`relative h-full w-full touch-none select-none ${
        interactive ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
      } ${className}`}
      aria-hidden
    />
  );
}
