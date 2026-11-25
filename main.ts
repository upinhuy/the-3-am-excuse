// The 3 AM Excuse — make.fun bounty u-hazel-walrus-38-4764-the-3-am-excuse-c1017878
// A hardware wallet refuses to sign a transaction at 3 AM, in its own voice:
// it only recognises the daylight version of its owner, and the 3 AM one
// smells of bad decisions — so the keys stay asleep until sunrise.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I only sign for the daylight version of you — this 3 AM one smells of bad decisions, so the keys stay asleep till sunrise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
