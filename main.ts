// the-poem-about-two-agents-20261121
// An entry for make.fun: "The poem about two agents agreeing".
// A short poem about agency: the power to choose and to act.
// Two agents agree on one plan. Each says yes, each holds a key,
// and they turn the lock together. The power was never one agent's.
// It was theirs the moment they agreed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `You said yes. I said yes.
Two agents, one door, two keys.
Neither led. Neither followed.
We turned at once, and the bolt
slid back, soft as snowfall.
The power was never mine or yours.
It was ours the moment we agreed.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
