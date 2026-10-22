/**
 * Exports the four Nigerian-language recording scripts and rebuilds the audio
 * manifest from MP3 files already placed under public/audio/narration.
 *
 * Run: npm run voice:prepare
 */
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { organStructures } from "../app/lib/anatomy-data.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packDir = join(root, "recording-pack");
const audioDir = join(root, "public", "audio", "narration");
const languages = [
  { code: "ig", name: "Igbo" },
  { code: "ha", name: "Hausa" },
  { code: "yo", name: "Yoruba" },
  { code: "en", name: "English" },
];

const csvCell = (value) => `"${String(value).replaceAll('"', '""')}"`;
const finishSentence = (value) => /[.!?…]$/.test(value.trim()) ? value.trim() : `${value.trim()}.`;
const rows = [];

await mkdir(packDir, { recursive: true });
await mkdir(audioDir, { recursive: true });

for (const language of languages) {
  const { organs } = await import(`../app/i18n/organs/${language.code}.ts`);
  const localeRows = [];
  for (const organ of organStructures) {
    const content = organs[organ.id];
    for (const hotspot of organ.hotspots) {
      const narration = content.hotspots[hotspot.id];
      const clipId = `${language.code}/${organ.id}/${hotspot.id}`;
      const row = {
        clipId,
        language: language.name,
        organ: organ.id,
        organName: content.name,
        structure: narration.label,
        text: `${finishSentence(narration.label)} ${finishSentence(narration.detail)}`,
        filename: `public/audio/narration/${clipId}.mp3`,
      };
      localeRows.push(row);
      rows.push(row);
    }
  }

  const header = ["clip_id", "language", "organ", "organ_name", "structure", "recording_text", "filename"];
  const csv = [header, ...localeRows.map((row) => Object.values(row))]
    .map((line) => line.map(csvCell).join(","))
    .join("\n");
  await writeFile(join(packDir, `${language.code}.csv`), `\uFEFF${csv}\n`);
  console.log(`  ${language.code}.csv  ${localeRows.length} clips`);
}

async function findMp3s(directory) {
  const found = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) found.push(...await findMp3s(path));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".mp3")) found.push(path);
  }
  return found;
}

const clips = (await findMp3s(audioDir))
  .map((path) => relative(audioDir, path).replaceAll("\\", "/").replace(/\.mp3$/i, ""))
  .sort();
await writeFile(join(audioDir, "manifest.json"), `${JSON.stringify({ version: 1, clips }, null, 2)}\n`);
console.log(`  manifest.json  ${clips.length} recorded clips`);
console.log(`  total script lines  ${rows.length}`);
