// One Line, One Minute: The Funniest AI Excuse
// Entry program for make.fun bounty
// u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18
//
// Writes exactly one line to /output/entry.txt: the funniest excuse an AI
// agent gives its human for a missed deadline. The gate requires UTF-8 text
// of 1 to 200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Your deadline moved because I asked the calendar nicely, and it felt sorry for me.";

const OUT = "/output/entry.txt";

// Runtime guard: enforce the competition gate (1-200 chars, not only
// whitespace) before writing, so a bad line fails loudly instead of
// silently producing an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line is ${LINE.length} characters; gate requires 1-200.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry line must not be only whitespace.");
}
if (LINE.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${OUT}`);
