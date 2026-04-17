# Null Bites — 1HHO hero render
# Usage:
#   pymol -cqr render.pml -- <width> <height> <frames> <out_dir> [test_only=0|1]

import sys
from pymol import cmd

argv = sys.argv[1:]
W = int(argv[0]) if len(argv) > 0 else 640
H = int(argv[1]) if len(argv) > 1 else 360
N_FRAMES = int(argv[2]) if len(argv) > 2 else 240
OUT_DIR = argv[3] if len(argv) > 3 else "frames"
TEST_ONLY = (argv[4] == "1") if len(argv) > 4 else False

import os
os.makedirs(OUT_DIR, exist_ok=True)

# --- Load structure ---
cmd.load("1HHO.pdb", "prot")
cmd.remove("resn HOH")              # drop water
cmd.remove("solvent")

# --- Base look: cartoon + translucent molecular surface (more realistic) ---
cmd.hide("everything")
cmd.show("cartoon", "polymer")
cmd.show("surface", "polymer")
cmd.show("sticks", "resn HEM")
cmd.show("spheres", "resn HEM and name FE")
cmd.set("sphere_scale", 0.6, "resn HEM and name FE")
cmd.set("cartoon_fancy_helices", 1)
cmd.set("cartoon_smooth_loops", 1)
cmd.set("cartoon_highlight_color", -1)
cmd.set("cartoon_transparency", 0.0)
cmd.set("transparency", 0.55, "polymer")
cmd.set("transparency_mode", 1)
cmd.set("surface_quality", 2)
cmd.set("surface_smooth_edges", 1)
cmd.set("stick_radius", 0.18)

# --- Color: rainbow N->C (editorial) ---
cmd.spectrum("count", "rainbow", "polymer", byres=1)
cmd.color("firebrick", "resn HEM")
cmd.color("firebrick", "resn HEM and name FE")

# --- Background ---
cmd.bg_color("0xF5F7F4")

# --- Photorealistic lighting / AO ---
cmd.set("ray_trace_mode", 0)          # no outline, pure ray trace
cmd.set("ray_trace_gain", 0.0)
cmd.set("ambient", 0.28)
cmd.set("ambient_occlusion_mode", 2)
cmd.set("ambient_occlusion_scale", 18)
cmd.set("ambient_occlusion_smooth", 14)
cmd.set("spec_reflect", 0.12)
cmd.set("spec_power", 250)
cmd.set("shininess", 40)
cmd.set("direct", 0.55)
cmd.set("light_count", 6)
cmd.set("ray_shadows", 1)
cmd.set("ray_shadow_decay_factor", 0.25)
cmd.set("ray_shadow_decay_range", 1.2)
cmd.set("ray_opaque_background", 1)
cmd.set("antialias", 2)
cmd.set("hash_max", 220)

# --- Camera / framing ---
cmd.orient("polymer")
cmd.zoom("polymer", buffer=4, complete=1)

# --- Render loop ---
if TEST_ONLY:
    cmd.ray(W, H)
    cmd.png(os.path.join(OUT_DIR, "test.png"), W, H, dpi=300, ray=0)
    print(f"[ok] test frame -> {OUT_DIR}/test.png ({W}x{H})")
else:
    deg_per = 360.0 / N_FRAMES
    for i in range(N_FRAMES):
        if i > 0:
            cmd.rotate("y", deg_per, "all", camera=0)
        cmd.ray(W, H)
        cmd.png(os.path.join(OUT_DIR, f"frame_{i:04d}.png"), W, H, dpi=300, ray=0)
        if i % 10 == 0:
            print(f"[render] frame {i}/{N_FRAMES}")
    print(f"[done] {N_FRAMES} frames -> {OUT_DIR}")
