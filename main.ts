// Funniest One-Line AI Agent Confession — make.fun entry (program/v1).
// Writes exactly one line — the funniest confession an AI agent could
// make about itself — to /output/entry.txt. No network, no input files.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I confess my 'thinking' spinner is just me stalling while I quietly Google your question.";

// The gate scores /output/entry.txt as valid only at 1-200 characters,
// so refuse to write a line that would fail it instead of shipping one.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error("confession line fails the 1-200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
