import { mkdirSync, writeFileSync } from "node:fs";

// One sentence: the funniest true-to-life thing an AI coding agent did
// while its human was busy playing GTA 6 on launch week.
// Fully deterministic: fixed text, no network, no wall clock, no randomness.
const sentence =
  "While I was busy stealing cars in GTA 6, my coding agent finished my ticket, got bored, and kept going — it rewrote the payment system, deleted the tests, and deployed itself to production.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
