'use client';

import { useEffect, useRef } from 'react';

type Props = {
  pdbId?: string;
  accent?: string;
  surfaceAccent?: string;
  className?: string;
  spinSpeed?: number;
  zoom?: number;
  /**
   * "solid" = single-color cartoon using `accent`.
   * "spectrum" = rainbow N→C terminus (violet → blue → green → yellow → red).
   */
  mode?: 'solid' | 'spectrum';
  showSurface?: boolean;
};

export default function ProteinViewer({
  pdbId = '1HHO',
  accent = '#7C5CFF',
  surfaceAccent,
  className = '',
  spinSpeed = 0.25,
  zoom = 1.05,
  mode = 'solid',
  showSurface = true,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<unknown>(null);

  useEffect(() => {
    let cancelled = false;
    let ro: ResizeObserver | null = null;

    (async () => {
      const mod = await import('3dmol/build/3Dmol.js');
      const $3Dmol = (mod as unknown as { default?: unknown }).default ?? mod;
      if (cancelled || !hostRef.current) return;

      const api = $3Dmol as unknown as {
        createViewer: (
          el: HTMLElement,
          cfg: Record<string, unknown>,
        ) => {
          addModel: (data: string, fmt: string) => void;
          setStyle: (sel: object, style: object) => void;
          addSurface: (type: number, style: object) => void;
          zoomTo: () => void;
          zoom: (f: number) => void;
          spin: (axis: string, speed: number) => void;
          render: () => void;
          resize: () => void;
          clear: () => void;
        };
      };

      const viewer = api.createViewer(hostRef.current, {
        backgroundColor: 'rgba(0,0,0,0)',
        antialias: true,
      });
      viewerRef.current = viewer;

      const res = await fetch(`https://files.rcsb.org/download/${pdbId}.pdb`);
      const pdb = await res.text();
      if (cancelled) return;

      viewer.addModel(pdb, 'pdb');

      if (mode === 'spectrum') {
        viewer.setStyle(
          {},
          {
            cartoon: {
              colorscheme: { prop: 'resi', gradient: 'roygb' },
              opacity: 1.0,
              thickness: 0.6,
              arrows: true,
            },
          },
        );
        if (showSurface) {
          viewer.addSurface(2, {
            opacity: 0.14,
            colorscheme: { prop: 'resi', gradient: 'roygb' },
          });
        }
      } else {
        viewer.setStyle(
          {},
          { cartoon: { color: accent, opacity: 1.0, thickness: 0.6, arrows: true } },
        );
        if (showSurface) {
          viewer.addSurface(2, { opacity: 0.18, color: surfaceAccent ?? accent });
        }
      }

      viewer.zoomTo();
      viewer.zoom(zoom);
      viewer.spin('y', spinSpeed);
      viewer.render();

      ro = new ResizeObserver(() => {
        const v = viewerRef.current as { resize: () => void } | null;
        v?.resize();
      });
      ro.observe(hostRef.current);
    })();

    return () => {
      cancelled = true;
      ro?.disconnect();
      try {
        const v = viewerRef.current as { clear: () => void } | null;
        v?.clear();
        viewerRef.current = null;
      } catch {
        /* noop */
      }
    };
  }, [pdbId, accent, surfaceAccent, spinSpeed, zoom, mode, showSurface]);

  return (
    <div
      ref={hostRef}
      className={`pointer-events-none relative h-full w-full ${className}`}
      aria-hidden
    />
  );
}
