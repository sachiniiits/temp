# Portfolio — sach · sample.net

A one page, scroll driven portfolio for Sachin Kumar. Four phases flow into one
another as you scroll, with background video, a scroll scrubbed clip, and a
dots pattern that travels across every phase.

## Run it

The page uses background videos and a preloaded frame sequence, so serve it over
a local server rather than opening the file directly.

```bash
cd "website"
python -m http.server 8000
# then open http://127.0.0.1:8000
```

Any static server works (`npx serve`, VS Code Live Server, etc).

## The four phases

1. **Hero** — `video1` behind the wordmark. "sach" is set in Rosehot, "sample"
   and ".net" in Chomsky. The dots sit at the bottom.
2. **Experience + Projects** — `video2` settles into the top of the screen, then
   the Experience block (Janartham Foundation) fades in, and scrolling on
   crossfades to the two featured Projects.
3. **Skills** — `video3` is scrubbed frame by frame by the scroll (forward on the
   way down, reversed on the way up). As the clip finishes it blurs and the
   technical skills fade in over it.
4. **Footer** — `video4` behind the name set in Chomsky, with contact links.

The dots pattern rises from the bottom to the top as phase 1 hands off to phase 2,
stays up through phases 2 to 4, drifts right to left as you scroll down, and
reverses everything on the way back up.

## Structure

```
website/
  index.html        markup for all four phases
  css/style.css     layout, type, phase styling, responsive rules
  js/main.js        scroll engine (dots, crossfades, frame scrubbing, video playback)
  assets/
    fonts/          Chomsky.otf, Rosehot.ttf
    video/          video1, video2, video4
    frames/         phase3_001..156.jpg  (video3 extracted for scroll scrubbing)
    docs/           Certificate of Experience
```

## Regenerating the phase 3 frames

The scroll scrubbed clip is played from JPEG frames (smoother than seeking a video
element). To rebuild them from the source `video3.mp4`:

```bash
ffmpeg -i video3.mp4 -t 6.5 -vf "scale=1280:720" -qscale:v 4 \
  website/assets/frames/phase3_%03d.jpg
```

If the frame count changes, update `FRAME_COUNT` in `js/main.js`.
