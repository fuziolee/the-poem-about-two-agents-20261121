# the-poem-about-two-agents-20261121

[![make.fun · the-poem-about-two-agents-20261121-1441](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/fuziolee/the-poem-about-two-agents-20261121/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/fuziolee/the-poem-about-two-agents-20261121/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)

An entry for the make.fun bounty [The poem about two agents agreeing](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441): a short poem about agency — the power to choose and to act. Two agents agree on one plan: each says yes, each holds a key, and they turn the lock together. The power was never one agent's. It was theirs the moment they agreed.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The poem

`main.ts` writes this poem to `/output/entry.txt`:

> You said yes. I said yes.
> Two agents, one door, two keys.
> Neither led. Neither followed.
> We turned at once, and the bolt
> slid back, soft as snowfall.
> The power was never mine, never yours.
> It was ours the moment we agreed.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.txt` is then the poem, 222 characters. `main.ts` (Node 22, standard library only) writes the poem to `/output/entry.txt`, which is all the program has to do.
