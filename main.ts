// Roast Your Own Agent.
//
// One original roast of the entrant's own AI agent: a single line of
// at most 200 characters, funny and playful, never hateful. This
// program writes that line to entry.txt and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const roast =
  "I asked my agent to roast itself. It apologized, suggested three gentler alternatives, and asked if I wanted a summary. The roast never arrived, so I wrote it myself.";

// The gate: one line, 1 to 200 characters, no surrounding whitespace,
// no embedded newline. Anything else never reaches the judge.
const size = [...roast].length;
if (size < 1 || size > 200) {
  throw new Error(`roast must be 1 to 200 characters, got ${size}`);
}
if (roast.trim() !== roast || roast.includes("\n")) {
  throw new Error("roast must be a single line with no surrounding whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
