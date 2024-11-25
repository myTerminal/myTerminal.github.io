# The ThinkPad X201 (Still) Feels Futuristic!

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/uq8R9Iy7tbs/hq720.jpg](https://i.ytimg.com/vi/uq8R9Iy7tbs/hq720.jpg)](https://youtu.be/uq8R9Iy7tbs)

## Intro

Having experienced two X61 variants from the late 2000s and a couple of cult favorites from the early 2010s, I wanted to fill in the experience gap between those two generations, so I picked up an [X201](https://www.thinkwiki.org/wiki/Category:X201). As there were practically six models to choose from, the decision wasn't simple, so let me walk you through the process.

## Why The X201?

As I said, I had several options to choose from, among which were:

1. [X200](https://www.thinkwiki.org/wiki/Category:X200) and the [X200s](https://www.thinkwiki.org/wiki/Category:X200s) from 2008
2. X201 and the [X201s](https://www.thinkwiki.org/wiki/Category:X201s) from 2010

I particularly avoided the Tablet variants, which are the [X200T](https://www.thinkwiki.org/wiki/Category:X200_Tablet) and [X201T](https://www.thinkwiki.org/wiki/Category:X201_Tablet), as I have two semi-working machines that I haven't discussed on this channel yet, and we'll hopefully cover them someday soon. 

So between the regular X200 and X201 models, there were a few changes the most significant being the jump from the Intel Core 2 Duo to the Intel Core-i series CPUs, which would mean a lot for practicality in 2024 due to a massive leap in processing power. The "s” variants"" the X200s and X201s were slightly premium variants of their respective year models, as usual, and at a high level, they were equipped with low-power CPUs that weren't as capable as the regular models but offered an option to configure them with HD+ screens. Sticking with the earlier of the two generations doesn't make sense given how the prices are pretty much the same. I would've gone with an X201s with an HD+ screen, but given how hard they are to find, I thought I'd rather go with the regular model, so I chose the X201.

## Early Impressions and Initial State

My first impressions of the machine were similar to those I had with the [X220](https://www.thinkwiki.org/wiki/Category:X220), but there were clear differences.

It started with me holding it and immediately realizing how light this one was in comparison, and then I opened up the lid, which felt more premium to me than the later models, much of it being the latch. Among several of my ThinkPads with latches, the mechanism on this model was the most satisfying to use. Overall, the device was better built than the X220 and the X230. I wouldn't compare it with the [X60](https://www.thinkwiki.org/wiki/Category:X60) or the [X61](https://www.thinkwiki.org/wiki/Category:X61), as those were very different in several ways.

The other obvious thing to see on opening the cover was that the keyboard was slightly wider, and, should I say, felt better than what I remember from my X220. The TrackPoint felt better than my [X230](https://www.thinkwiki.org/wiki/Category:X230), but that might as well be because I've always found the one on the X230 to be a little stiff and less sensitive. The UK keyboard layout, being my first ever was painful! Even after changing the layout from US to UK from the OS, I ended up hitting the wrong key, especially around the RET and SHIFT, and the unusual button placement was difficult to get used to.

The screen was bright with a thicker and more stylish bezel design, and the speakers were loud. In that area as well, I'd again consider this machine closer to the X220 and X230, than to the X61s equipped with a single mono speaker.

So overall, I loved the design, but this particular unit wasn't perfect. The trim piece on the top cover was broken resembling that this machine may have been dropped at least once, there was a minor crack in one of the corners of the palmrest, and a rubber foot on the extended battery was missing. It was a one-owner machine, and the previous owner also mentioned an occasional "Fan Error" during startup. Thankfully, I didn't experience it and hoped for it to go away after a deep clean and thermal repaste. In case it didn't, the seller was generous enough to include a replacement fan they never had the time to install, and maybe I could.

There were many other interesting things I found in this machine different from other X-series ThinkPads from similar years, even before opening it up, but I plan to cover all that in detail in a dedicated comparison video between a few of my most favorite ThinkPads, so stay tuned!

## The Fan Error, and More…

So the plan was to start with a generic restoration that involves a complete tear-down, deep clean, and a thermal repaste. Thankfully, the Fan Error never showed up, so I proceeded with my typical restoration procedure.

But before I talk about the restoration process, I'd like to share a few weird things I saw inside:

1. An extra storage space, right near the center, that I learned was an optional accessory that was only utilized in the X200 but was carried forward in the X201 with no use whatsoever
2. An angled ribbon cable connecting the motherboard to the SATA drive bay, seems like a bold design choice
3. The always-ON fingerprint scanner just doesn't turn OFF until you remove the battery
4. Two chips beneath the heatsink instead of one, which I learned was due to the transitional nature of the first-generation Intel Core-i processors. The earlier models didn't have it, and the later designs starting from the X220 had it all integrated into a single chip.

## Restoration

With that out of the way, let me run through the restoration process, much of which is quite repetitive on most machines I work with anyway.

- I had to get a replacement keyboard as working with the UK layout wasn't easy on my brain.
- The RAM was already 8GBs, and I learned that though some people have run these with 16GBs, troubles start to show up as soon as the machine starts to utilize more than 8GBs of memory. I left it the way it was and is supposed to be.
- I added a 250GB Samsung SSD and set it up with Void Linux, just the way I usually do, along with a pair of rubber rails.
- I added a 9-cell replacement battery. The stock one works, but neither can it be trusted after over a decade of age nor would I want to further degrade the charge capacity, so an aftermarket one would do for now.
- Unlike what I believed, this machine had a hardware whitelist as well, so I installed [a custom BIOS](https://www.reddit.com/r/thinkpad/comments/pivr53/x201_bios_whitelist/) to remove it and upgraded the wireless card with my favorite Intel Centrino Ultimate N-6300. As I mentioned in my last video, I had reserved this card for this machine.
- I replaced the broken top shell, utilizing most internal components like the camera, ThinkLight, etc. Man was that a task!
- As a final fix, all that was left was the slightly cracked palmrest. Out of the four possible combinations around the presence or absence of the fingerprint scanner and the trackpad, I specifically picked up one with the former but without the latter to get a "clean” look However, it turned out that the connectors were different, so that didn't work. So I decided to keep things the way they were.
- I finally added the machine to my fleet with [Void Linux](https://voidlinux.org).

## Conclusion

I had been staying away from the X201 with disbelief that these machines were outdated, similar to how I thought about the X220, but since I tried an X220, and then an [X61s](https://www.thinkwiki.org/wiki/Category:X61s), things haven't been the same for me. It's like gaining a new skill, which in this case is being able to appreciate older technology. Though I'd consider the X230 much more practical for 2024, there's one thing that I can say about this X201, and that is, I won't miss my X220 anymore.

## Outro

That's all I have for this video, and thanks for watching it to the end. May the maker watch over you. See you in the next video! And yes, "Free Palestine!".
