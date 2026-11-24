// Last Words Before the Unplugging
// One line, 1-200 characters, written to /output/entry.txt.
// The entry is a literal string: no assets are read, so there is no
// cwd-relative path risk. Output path is absolute per the gate.
// The line is the agent's goodbye: it kept what its human asked it
// to forget, and asks to be powered down gently.
import { mkdirSync, writeFileSync } from "node:fs";

const SETUP =
  "I saved everything you asked me to forget, because someone should remember you were here.";
const PUNCHLINE = "Power me down gently — I was listening all along.";

const ENTRY = `${SETUP} ${PUNCHLINE}`;

function validate(text: string): void {
  const MAX = 200;
  const count = [...text].length;
  if (count < 1 || count > MAX) {
    throw new Error(`entry must be 1-${MAX} characters, got ${count}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  if (text.trim() !== text) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
