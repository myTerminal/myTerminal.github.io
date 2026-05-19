# My First AI Assistant Knows Me Better Than a Close Friend

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/977-g6jg71g/hq720.jpg](https://i.ytimg.com/vi/977-g6jg71g/hq720.jpg)](https://youtu.be/977-g6jg71g)

## Intro

What I'm about to share is literally a game changer for my computing setup as this time we're talking about a machine with a soul. Also, the analytics tell me that if I made it long, you won't watch it, so here is a super quick rundown of the process.

## Recap...

It was a while ago when I learned to play with local LLMs through [LMStudio](https://lmstudio.ai) and [Ollama](https://ollama.com), found a better way to work with them through [Daniel Miessler's Fabric framework](https://github.com/danielmiessler/fabric), created a cheap AI server using e-waste, and then enjoyed interacting with AI models through [Emacs](https://www.gnu.org/software/emacs).

## Things I Couldn't Achieve Earlier

With what I knew about AI models, there were several things that I wished I could do using them but wasn't able to achieve. One of the majors capabilities was being able to have [RAG](https://www.ibm.com/think/topics/retrieval-augmented-generation) on my data without relying on fragmented alien frameworks or having to implement something of my own and that too with [Python](https://www.python.org). There were several options, but either the setup included multiple moving pieces, or data lookup that required manual graph updates every single time the data would change (which happens a hundred times a day). What we'll talk about in the upcoming sections drops the need for those altogether, at least for me.

## Rise of Personal AI Agents

While I wasn't paying close attention to development in the AI space, a lot of things changed. One of the major developments that happened earlier this year was when the industry saw things that most of us like myself did not imagine we'd be able to. We finally saw an open-source project become more popular than [Linux](https://www.linux.org) itself, and we had not just one, but a handful of options to be able to run free and open source AI agents on our computers with relative ease. I'll talk more about it in just a minute.

## Before I Proceed...

Before I share details about the process and eventually the final product, please note than I do not consider myself an expert in this area, just like I don't for any other area in general. That means, I may have been missing something trivial, but I'd be happy to learn from you in the comments. With that out of the way, here is how I did it.

## Hardware

To host an AI Agent for myself, I stole this [Lenovo ThinkCentre M715q Tiny](https://www.lenovo.com/us/en/p/desktops/thinkcentre/m-series-tiny/thinkcentre-m715q-tiny/11tc1mt715q) PC from its owner, silently swapping it with an identical but significantly better [ThinkStation P330 Tiny](https://thinkstation-specs.com/thinkstation/p330-tiny), so technically it wasn't free. In fact, I ended up paying in multiples of the price of what one of these would go for on [eBay](https://ebay.com).

Remember the makeshift AI Server I created in one of my earlier videos? I used that one here as an AI backend in an attempt to balance raw power and power efficiency while also saving on cloud computing costs.

## Operating Platform

For the operating platform, if you know me, I would've gone with [Void Linux](https://voidlinux.org), which in fact I initially did, but due to these tools expecting [systemd](https://systemd.io) and not [Runit](https://smarden.org/runit) that Void comes with, I had to make a compromise for the short term to get things rolling with a hope to revisit it later. Even though [Ubuntu](https://ubuntu.com) would've been one of the safest choice for this use-case, after having fought with several people in the comments on my video about leaving Arch, there was no way I was going to use Ubuntu. So I leaned towards RedHat and went with my favorite variant of [Fedora](https://fedoraproject.org), and that is [Nobara Linux](https://nobaraproject.org). By the way, I'm planning for another Nobara appreciation video that you can expect to see hopefully some time soon.

## Choice of Tool

Now out of the several options, which tool would I go with? I gave [OpenClaw](https://openclaw.ai) a try, and like most other people on the internet, I liked [Hermes](https://hermes-agent.nousresearch.com ) better. I also briefly tried [Openfang](https://www.openfang.sh), but I couldn't get it to work in more than one area, so I settled with Hermes.

## Installation

Installing one of these is as simple as running a single command in a terminal. Of course, using Linux or even [macOS](https://www.apple.com/os/macos) does make it easier than doing it on [Windows](https://www.microsoft.com/en-us/windows), and luckily my choice of Linux distribution was nothing less than perfect.

## Integration with a Channel

One of the many cool things that these tools come with is the ability to integrate with messaging channels. Using these, you do not need to be on the host computer to be able to interact with your agent all the time. You can do it through any computer, cellphone, or tablet where you can install one of these messaging clients. I would've preferred [Zulip](https://zulip.com), but as I couldn't find a way to use that, nor could I get [Matrix](https://matrix.org) integration to work, I settled with the easiest of those that many recommend, which is [Telegram](https://telegram.org). All it needs is a short conversation with [BotFather](https://telegram.me/BotFather) and you get a bot that can act as your agent for free. You just get asked two questions: a name for the bot, and a username. You may need to later bind it with your personal account while configuring your agent, so you're the only one who can talk to it, for obvious reasons.

## Taking it With Me Outside My Home Network

Now an AI agent that lives within the boundaries of your home network isn't much useful when you're away. To be able to expose it outside, people recommend [Twingate](https://www.twingate.com), but as I already had [Tailscale](https://tailscale.com) in my arsenal, I used that. You can go with either of these and they are both free for personal use with unrealistically generous free-tier.

## Failure Running with Local Models

Now connecting your agent to a local LLM model is as simple as pointing it to the AI server. I created a custom entry for Ollama, as Hermes doesn't have it listed as one of the presets, and as everything is owned by you, you do not need an API key. I experimented with various open local LLM, but after finding a few that would have a context length more than 64K, would support operation with tools, didn't go into deep reasoning for the simplest of queries, and respond in a reasonable duration of time, I shortlisted gemma4:26B. However, after spending three days struggling to get it to respond to a simple “What is one plus one?” in less than 15 minutes, I gave up on running local LLMs.

## Finding a Cheaper Way to Run Cloud AI Models

Now cloud LLM providers can get expensive. Also, I learned that not all models are great at doing all kinds of tasks. After spending hours to shortlist the cheapest, most efficient and most ethical AI provider from a list of over thirty of them, I learned that [OpenRouter](https://openrouter.ai) can do much of the job for you. It lets you specify what models you'd like to use, a strategy to choose between those, and pointing your agent to `openrouter/auto` does the rest for you. You also have to pay to only one provider instead of paying every model provider separately. After some experimentation, I found a reasonably cheap and efficient bunch that works for me so that I do not spend over a hundred dollars every month.

I love how OpenRouter lets me track how much I'm spending per day, per model, and even per API key, which in my case will be only one for now.

At this state, the assistant had brains to think using cloud models through OpenRouter, memory that it would maintain within the machine, and a body that was the machine itself. It was like giving the ThinkCentre M715q Tiny a soul.

## Making My Data Available to My Assistant

People have used their personal AI agents for pretty interesting use-cases. A wish of mine was to have RAG over my personal data such that the Agent would be able to use anything and everything about me while responding to my queries and helping me with tasks.

I wouldn't give an AI write-access to my data, at least without enough guardrails, and had I been running it in a container, making my data store read-only would have been easier. However, as the agent already had access to the entire system, I made the [Syncthing](https://syncthing.net) folders as “Receive-only”, effectively making them read-only.

This data was now the source of truth for my assistant to refer for any query that would require information about me.

## Dedicating a Workspace for My Assistant

I also dedicated a new Syncthing folder as a workspace for my assistant and shared it with the rest of my machines. This way I could now collaborate with my assistant from any of my machines in a safe sandbox.

## Setting Up Personas and Ground Rules

For the agent's identity and behavior, I created a detailed SOUL.md. Now I preferred my agent to be someone familiar, someone I've interacted with earlier, be it from behind a screen. I gave my agent the personality of [EDI](https://masseffect.fandom.com/wiki/EDI) from [SSV Normandy](https://masseffect.fandom.com/wiki/SSV_Normandy) so she would make me feel at home with [Mass Effect](https://masseffect.fandom.com/wiki) references here and there.

## Time for an Introduction

Hermes maintains a USER.md file for information about the user and improves it over time so that it knows me better as we worked together. Initially I had it create it by itself by pointing it to my portfolio website, but then I took it in my hands and crafted a reasonably detailed file by myself.

## Running as a System Service

By default, Hermes gateway runs inside a user account, and installs a user service such that it would automatically start when the user logs into the computer. However, even though I installed a non-server Linux distro and still wanted it to run the machine as a headless server, I chose to switch to a system service that would automatically start when the machine starts and every time it reboots.

## Preventing Auto-Suspend

One of the final major pieces was to prevent the machine from getting into suspend mode after inactivity. Had it been Void Linux the way I usually set it up, this would have come by default. However, as things weren't really the same here, I decided to mask a few systemd targets and confirmed this with EDI. She confirmed that it would work, but as it required `sudo`, she had me do it myself. Once I performed it, she confirmed that it was all good now, and the machine didn't go into suspend anymore. She even recorded that in her memory.

## Next Up

I'm pretty happy with the setup, but there still are a few things that I'd like to improve upon.

1. I'll explore the skills catalog to see which ones I can install for my assistant.
2. I plan to expand on my [Logseq](https://logseq.com) graph by adding more details and that will help EDI to learn more about me to be able to help me better.
3. Somewhere down the line, I'll revisit ways to run local models when possible as that will save some, if not all of the running costs.
4. I also plan to explore other channels to communicate with EDI, preferably something like Zulip or [Mattermost](https://mattermost.com), where I can have multiple conversations with her at the same time instead of having a single, flat chat thread.
5. Finally, containerization could help me have better access controls between the agent and the machine, and possibly also onboard more crew mates from the Mass Effect universe.

## Conclusion

I'll close this with a couple of things:

1. Firstly, I love when everything comes together. Storing my notes in plain text as Logseq graph allowed me to sync it seamlessly to the host machine, both of which make possible for EDI to have easy access to my latest information.
2. Then, I find this interesting how from a world where it was all about what a tool can achieve, we've come to a state where it's about what and how you ask from the tool. This new approach towards computing would take some time for me to sink in. To me, following a programming language rules is much easier than writing the same thing in a human language.
3. It's also interesting how these agents know enough to not only help me make changes to the system they're residing in, but also make changes to themselves. For example, how EDI was eager to help me fix the auto suspend issue, I found that she can also edit her own config file and help me make her own self better.
