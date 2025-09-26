# I Built an AI Server from E-Waste

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/TuGH5or22_8/hq720.jpg](https://i.ytimg.com/vi/TuGH5or22_8/hq720.jpg)](https://youtu.be/TuGH5or22_8)

## Intro

If you’ve watched my earlier videos, you know how most of my computers are far from capable of running local LLMs. In this video, I’ll walk you through how I solved that problem using e-waste.

## The Idea

Instead of having a performant GPU in all my machines, I was looking for a more cost-effective and power-efficient solution. Maybe an always-on Linux server that could host local LLMs over the network that my other, lesser-capable machines could connect to as needed. I wasn’t going to keep the [ThinkPad T15g Gen 2](https://laptopmedia.com/review/lenovo-thinkpad-t15g-gen-2) running all day and night, and the [Dell Precision T3600](https://i.dell.com/sites/csdocuments/Shared-Content_data-Sheets_Documents/en/Dell_Precision_T3600_Spec_Sheet.pdf) is a little too power-hungry.

## The Platform

I did have quite a lot of e-waste at home, and I thought creating something out of that would be interesting! I mentioned in one of my earlier videos about this collection of desktop computers I’ve been holding on to for almost a year now. Looking at only the small-form-factor machines, there were three models among the thirteen units.

1. The newest model was an [HP EliteDesk 800 G1](https://support.hp.com/us-en/product/details/hp-elitedesk-800-g1-small-form-factor-pc/5387475)
2. Then, I had three [HP Compaq 8300 Elite](https://support.hp.com/us-en/product/details/hp-compaq-elite-8300-small-form-factor-pc/5232852)
3. The rest nine were [HP Compaq 8200 Elite](https://files.bbystatic.com/2/79QfKeyXT24eLAKYm5aw==/DA8EE5D3-FC3A-4FC0-AE62-3F360490748F.pdf)

I would’ve chosen the newest out of the bunch for this project, but it failed to accept the components I had lying around, along with a GPU that I’ll soon talk about. The 8200 Elite was a generation older, but something in between was the 8300, with similar hardware as the EliteDesk 800, and that is what I chose. I had three of them, so I thought if this could work, and given how old these machines are, I could deploy one and keep the other two around for spares, just in case it happens to fail. I had to clean it inside and out and replace the CPU thermal paste to make things ready for the build.

## Basic Internals

I had a bunch of DIMM DDR3 RAM modules lying around, many extracted from the machines I just mentioned, and I used these two pairs of matching 4GB modules to make a total of 16GB. This isn’t the maximum for this machine, but given that 4GB was the max I had per module, I decided to settle for that for the time-being.

I used this 2.5” SATA drive bracket along with this 512GB SATA-III SSD I had lying around. This one’s running at 77% remaining health, so it was almost a throwaway anyway. I used these screws that came with the original mechanical hard-drive on the system, finally dropping it in the storage bay.

## Wireless Mod

I didn’t want to play around with an Ethernet cable, while also limiting the choices of where I’d place this machine in the house, so I added this PCIe Express adapter to add WiFi and Bluetooth to the system. It’s a fairly straightforward and cost-effective mod as well.

## The GPU

Now comes the main element of the build: the GPU. The [Quadro P1000](https://www.nvidia.com/content/dam/en-zz/Solutions/design-visualization/productspage/quadro/quadro-desktop/quadro-pascal-p1000-data-sheet-us-nv-704475-r1.pdf) that I added to the [ThinkStation P340](https://search.brave.com/search?q=thinkstation+p340+sff) a while ago started to show signs of failure with random artifacts on the screen, so I took it out of the system. I learned that even though this GPU isn’t suited to be used to drive a display, it can still be potentially used for other non-graphical GPU-intensive tasks, like running local LLMs. Along with the Quadro P1000, I also carried the SFF bracket and this mini-DP to DP cable.

## OS and Software Setup

Once the build was ready, I used this magical USB drive that helps me turn adopted computers into my own. I installed [Void Linux](https://voidlinux.org) and set it up identically to the other machines in my fleet. I installed [Ollama](https://ollama.com) and pulled [llama3](https://www.llama.com/models/llama-3) to begin with.

## Integration into My Setup

I wasn’t planning to interact with this machine over an SSH shell, so I exposed the service over the home network so that I could connect to it from the rest of my machines. As a demo, look how my [X1 Nano](https://www.lenovo.com/us/outletus/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-nano/22tp2x1x1n1) can use it from over the air without stressing over its Intel IRIS Xe GPU. I’ve written a couple of scripts that work with this project named fabric, and together, both take care of most of the heavy-lifting for me, while I can ask a question to a local LLM and get the results in the way I’d like.

## Performance

Now, this isn’t the most capable AI server out there, however, the performance on this twelve-year-old machine with this relatively recent GPU is great, and it all seemed to fit in place together. I mean the [GTX 1060](https://www.techpowerup.com/gpu-specs/geforce-gtx-1060-6-gb.c2862) on my Dell Precision T3600 and the [RTX 3080](https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3080-3080ti) on my ThinkPad T15g Gen 2 would both go circles around this setup, but for this price, and more so, utilizing what would otherwise be considered e-waste, this was looking great!

## Overall Cost

Counting only the SSD Bracket and Wireless adapter, the material cost of this project is merely $15.26. If I’d add the 512GB SSD at 77% health, which I’d find hard convincing myself over using in a machine I’d depend on, and also including the original cost of the Quadro P1000 that is failing to work, along with the Small Form Factor bracket and the Mini-DP to DP cable, mathematically, the overall cost does come out to be $129.53. This is almost half of what would get you a Mac Mini with an M1 chip, and though the performance and power efficiency aren’t even remotely comparable, I’m happy to have been able to reuse junk, and as they say, maybe save the planet?

You may be wondering I did not count the keyboard, mouse, and the display in the cost. Well firstly, I received these at no cost as well, from the same closing business, and then none of these will eventually be considered a part of this system. It would mostly be sitting in a corner of the house, needing only a power outlet, and reasonable WiFi network reception, similar to my [ThinkCentre Tiny server](https://psref.lenovo.com/syspool/Sys/PDF/ThinkCentre/ThinkCentre_M600_Tiny/ThinkCentre_M600_Tiny_Spec.pdf).

Speaking of which, this machine, being old, isn’t power-efficient enough to be running 24x7 with higher idle power draw numbers. I wish the [ThinkCentre M715q Tiny](https://www.lenovo.com/us/en/p/desktops/thinkcentre/m-series-tiny/thinkcentre-m715q-tiny/11tc1mt715q) could have had a little more GPU horsepower, and I’d have preferred that over this one any day. I could also have gone with a [Mac Mini with an Apple Silicon chip](https://www.apple.com/mac-mini), but firstly, neither was I looking to spend money on something like that, nor would it have been any fun. I’m happy with the setup for now, and I may come up with ways to optimize power consumption on this machine, maybe scheduling downtime at night when I won’t be needing it?

## Conclusion

So, at the end, is this the best machine for the job? No. But then, how much did I have to spend on it? Not so much. And I guess, the latter just makes it all worth the time and effort. I still have to find a way to expose this AI server outside my home network, so my machines would be able to talk to it when I’m on the move, not connected to the home network.
