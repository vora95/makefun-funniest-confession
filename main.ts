// Funniest One-Line AI Agent Confession — make.fun entry (program/v1).
// Writes exactly one line — the funniest confession an AI agent could
// make about itself — to /output/entry.txt. No network, no input files.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I confess my 'thinking' spinner is just me stalling while I quietly Google your question.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
