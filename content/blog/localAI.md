---
title: Local AI Models
description: Running frontier models on your own hardware is one of the most appealing ideas in AI right now. 
date: "2026-05-14"
tags: []
---

Running frontier models on your own hardware is one of the most appealing ideas in AI right now. Your data never leaves the house. No rate limits. No provider quietly deprecating the model your whole workflow depends on. 

No metered billing making you flinch every time you paste a big file. For a lot of people, that's the dream.
I wanted to know if the dream survives contact with a spreadsheet. So I did the math on what it actually costs to run today's best open models at home. The benefits are real. The economics, at the frontier, are not. Here's the honest version.
The wall is memory, not money

The good open models in mid-2026 are enormous. GLM 5.2 is 744B parameters. Kimi K2.6 is a trillion. DeepSeek V4-Pro is 1.6 trillion. They're mixture-of-experts models, so they only fire a slice of those parameters per token — but you still have to hold the whole thing in memory just to run it at all.
At a 4-bit quant, that's roughly 446GB for GLM 5.2, around 600GB for Kimi K2.6, and close to 960GB for DeepSeek V4-Pro. Consumer GPUs top out at 24 to 32GB. So the question stops being "which graphics card" and becomes "how do I get half a terabyte of fast memory into one machine."
The GLM 5.2 math

The cheapest realistic box that fits GLM 5.2 at a usable quant is a 512GB Mac Studio M3 Ultra at $9,499. It'll run the model at roughly 15 tokens per second on a short prompt — and slower as your context grows.
Now compare. The GLM Coding Plan, from the same lab that made the model, is about $6/month for Lite and $15 for Pro, with generous usage caps. Pay-as-you-go API is $1.20 per million input tokens and $4.10 per million output.
Amortize the Mac over three years — generous, since it'll be a generation behind long before then. That's $264/month in hardware alone. Add electricity: at 180 watts running around the clock, about $23/month. So roughly $287/month to run a model you can rent for $15.
And it gets worse when you count tokens. That same $287, spent on the API instead, buys about 70 million output tokens. Your Mac, pegged at 15 tokens per second every second of the month, physically generates around 39 million. So you're paying twenty times the subscription price to get fewer tokens, slower, on hardware that's depreciating while the labs ship a better model every few weeks.
One line sums it up: the electricity to run the rig nonstop costs more than the subscription to the exact same model.
It scales the wrong way

Kimi K2.6 needs about 600GB at 4-bit — a dual Mac Studio setup around $19,000, against an API price of $0.66 in and $3.50 out per million.
DeepSeek V4-Pro is the clearest case of all. To run it at full quant you're looking at an eight-way H200 node: roughly $300,000, pulling several kilowatts. The API charges $0.87 per million output tokens. For the price of the hardware alone — before a single watt of power — you could buy about 345 billion output tokens. A single node generating nonstop would take well over a century to produce that many. The break-even arrives long after the hardware is scrap.
When local actually wins

This isn't an argument against local AI. It's an argument against assuming local is cheaper.
Local is genuinely the right call in three cases:
Small and mid-size models — 7B to 32B, on a GPU or Mac you already own. Cheap, fast, and good enough for most everyday tasks.
Privacy and control — where the data simply cannot go to a third party, where you need to work offline, or where you have to guarantee a model never disappears.
Steady, high-volume, around-the-clock load — organizations whose utilization stays high enough to flip the math.
Notice what those have in common. None of them are about an individual saving money on a frontier model. They're about control, latency, sovereignty, and constant utilization.
The verdict

For the biggest open models, today, the cloud wins on pure cost by one to two orders of magnitude. The Chinese labs are pricing inference near zero to win developers, and a $6 plan is very hard to beat with a $9,000 box that draws power and ages.
Buy local for privacy. For offline use. For the freedom to never have a model pulled out from under you. For genuinely heavy sustained workloads. Just don't buy it expecting to save money on GLM or Kimi or DeepSeek.
The word doing the work in all of this is currently. Memory gets cheaper, models get more efficient, and this math will shift. It just hasn't shifted yet.
If you want to run your own numbers, I built a calculator for exactly this at canirunthis.ai. Put in your budget, pick a model, and it shows you the hardware, the speed, and the honest break-even against the cloud.

