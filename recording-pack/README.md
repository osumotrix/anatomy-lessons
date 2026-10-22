# BodyQuest human narration recording pack

This pack contains 36 short scripts for each launch language: Igbo (`ig.csv`),
Hausa (`ha.csv`), Yoruba (`yo.csv`), and English (`en.csv`). Record every row in
the `recording_text` column as a separate MP3 and save it at the exact path in
the `filename` column.

## Voice direction

- Use a warm, encouraging native speaker who sounds like a skilled young
  learners' educator.
- Read naturally and clearly; do not add or remove words.
- Keep the anatomical label slightly more deliberate than the explanation.
- Avoid exaggerated performance, background music, reverb, and noise removal
  that makes the voice metallic.
- Leave no more than 150 ms of silence at the beginning or end.

## Audio delivery

- MP3, mono, 44.1 kHz, 96–128 kbps.
- One native speaker per language for a consistent learning experience.
- Filenames and folder names must remain lowercase and match the CSV exactly.
- After copying recordings into `public/audio/narration`, run
  `npm run voice:prepare`. This rebuilds `manifest.json`; only listed recordings
  are playable on the website.

The website deliberately has no synthetic speech fallback. A language/organ
voice control becomes available only when all of that organ's recordings are
present.
