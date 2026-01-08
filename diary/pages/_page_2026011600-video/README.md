# I Built a ThinkPad T61 That Doesn't Exist

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/VVtGujTnzYM/hq720.jpg](https://i.ytimg.com/vi/VVtGujTnzYM/hq720.jpg)](https://youtu.be/VVtGujTnzYM)

## Intro

The [T440p](https://www.notebookcheck.net/Review-Lenovo-ThinkPad-T440p-20AN-006VGE-Notebook.108423.0.html) has come a long way since I picked it up, but I still haven't upgraded the CPU. As you may have heard, I am revisiting an older generation of ThinkPads, and it was finally time to make up for it with this [T61](https://www.notebookcheck.net/Review-Lenovo-Thinkpad-T61-14-1-SXGA.7190.0.html), along with a few other upgrades.

## Purchases

So, I purchased two "broken" machines, because

1. The asking price for a T61 in an acceptable condition was unreasonable.
2. Finding the best CPU in a 14.1", non-widescreen form-factor, with a US layout keyboard was practically impossible.

I went with two identical 14.1" widescreen models for maximum cross-compatibility of parts. I was still unsure of what size they were until they arrived, because, as I've mentioned before, even the sellers do not know.

## First Machine

The first machine to arrive was local from within the country, and I knew at least something about its condition. Exactly as described, it came with no battery, had a broken display hinge on the left, with one of the "teeth" sticking out when closed, but the rest seemed to look OK, except for some keyboard marks on the screen. It booted up to BIOS as soon as I connected it to the charger, showing 2GB RAM, and an Intel Core 2 Duo T8300. The screen looked crisp and bright, the DVD drive could open, and the Thinklight worked. There was no storage drive, but at least it had the drive bay cover with a screw. The palmrest had a hidden crack, and there were two 1GB DDR2 modules inside. Overall, it was a decent machine for the price, as there were several salvageable parts. I booted it up into a live Linux system and found the screen resolution to be WXGA, just as I expected. I also noticed that the WiFi didn't work. While I waited for the other machine to arrive, I gave this one a good cleanup from the outside, just in case. The machine already had a make-over, and when the screen was clean, I noticed a couple of scratches, including this big one, but I thought I'd worry about it later.

## Second Machine

The second one was sold as "no power", "for parts", and took a long time to arrive from Canada.

Apart from the dust and scratches, this one was in perfect condition. The battery was much lighter than I expected. I connected it to the other machine, and it did not seem to charge. The only major difference between the two machines was the expansion slots. One machine had two triggers for a PC Card and an Express Card, while the other one only had one trigger for a PC Card, with no trigger for the Smart Card slot.

## Plan

Now, this was starting to appear familiar (and traumatic), but I had my hopes high that I would end up with one working machine.

So I thought I'd start with the machine in better condition, trying to replace power-delivery related elements if that would make it work. Otherwise, I could replace all the internals with the ones with the broken one, hoping that the internals of ThinkPads would be the same across geographical regions.

## Fixes

I tried booting it with minimal components, but could not get anything to show any sign of life, as if the motherboard was dead. So, I went ahead and replaced the motherboard. I know I say this with every successive machine I do this with, but replacing motherboards on the T61 was my most stressful one yet. Every screw was of a different size, and the chance that I would remember which one came from where was very low. This is also when I thought I'd drop the Intel Core 2 Duo T9500, which is literally the furthest you can take this machine without having to worry about heat or making hardware changes.

I put everything back together, and after the machine successfully started, I noticed a few artifacts on the screen, and that was even more visible on the BIOS screen. So I went ahead and replaced the screen as well. After about an hour, swapping screens between the two machines, it was thankfully all looking great, and it was time for the upgrades.

## Restoration

1. Before proceeding with the rest, I wanted to address the hardware whitelist through [Middleton's BIOS](https://www.thinkwiki.org/wiki/Middleton's_BIOS). I realized that it won't allow me to flash a BIOS without a fully charged battery.
2. Given that neither of the machines came with a working battery, nor could I find a pre-owned genuine example, I had to settle for an aftermarket battery from eBay, but that gets the job done fine.
3. I resumed flashing the Middleton's BIOS. This process is pretty familiar to me, and thankfully, it went just as smoothly as on the other few machines from that generation. With that taken care of, it was time to get my hands into the hardware once again.
4. As usual, the advertised maximum limit of 4GB RAM was only because that was the maximum available at the time. As I didn't want to overspend on two 4GB DDR2 models while the RAM prices were sky-high, I decided to downgrade the [X61s](https://www.notebookcheck.net/Lenovo-Thinkpad-X61s.3935.0.html) from 8GB to 4GB (which it still wouldn't need anyway), and use those modules in the T61.
5. I tried a couple of storage drives with this machine, but as all of them happened to malfunction, I used a 128GB SATA III SSD that I had lying around.
6. For wireless, I used my standard [Intel Centrino Ultimate N-6300](https://www.intel.com/content/www/us/en/products/sku/59474/intel-centrino-ultimaten-6300-dual-band/specifications.html) with the adapter bracket, as I had spares of either of those. The WiFi was still not working, and I realized the hardware kill switch was turned OFF. Toggling it made it work right away.
7. I finished it off by installing EndeavourOS because I had already put too much time into setting up Void with the other failing storage drives earlier, and not setting it up exactly as I do would save me a lot of time.
8. I left the Bluetooth module as it was, and that could be a future upgrade, if at all I needed it.
9. I had a couple of Lenovo barrel chargers, so I did not buy one for this machine.

## The Result

At the end of the process, what I had with me was a ThinkPad T61 that doesn't exist, at least not on sale. It's faster in terms of processor and storage speed, has more than sufficient RAM, and hosts a way faster wireless card, to name a few improvements.

## Pros and Cons

Now for a 19-year-old machine, this T61 still has a lot going for it and can very well be used for many light to moderate tasks today. With all kinds of ports, an integrated DVD-drive, and easy maintenance, it's pretty utilitarian even in 2026. What it clearly lacks is modern ports, a higher resolution screen with better viewing angles, and a discreet GPU for demanding tasks.

## Comparison with X61s

The only member of this family that I have with me, at least in working order, is the X61s. On one side, we have this cute machine prioritizing weight, size, and battery power savings over computing performance, while on the other side, we have a much heavier machine that has many more ports, for which the other one needs a docking station. By default, the T61 is supposed to be around 1.5 times faster than the X61s. With the Middleton's BIOS in both, and the CPU upgrade in the T61, the gap widens even more, effectively turning the T61 into a "beast", in a relative sense.

## Comparison with T440p

Now let's turn the game up a little by replacing the X61s with the T440p. Now, as much of a "beast" we turned the T61 into, it's still far from the T440p. Even one of the best CPUs on the T61 cannot compete with that of the mid-level Core i5 CPUs on the T440p. And, I still haven't upgraded to a higher TDP quad-core i7 CPU. The WiFi upgrade on the T61 cannot match that on the T440p. Even with the Middleton's BIOS, the T61 still runs the SSD on SATA-II speeds, while the T440p can do it at SATA-III speeds by default, which is a significant jump. The maximum RAM on the T440p is double that of the T61. And, you still cannot use desktop effects on the T61 smoothly, nor play YouTube videos well, given the lack of hardware video decoding. Even if the T440p didn't have a discrete Nvidia GPU, it would still be able to do that smoothly. The 1080p IPS screen upgrade isn't possible on the T61, at least not in a plug-and-play manner. And that brings me back to admiring how the T440p does pretty much everything better than the T61, while maintaining a very similar form factor.

## Conclusion

Alright, enough shaming the T61, as it has its own charm. After bringing a dead machine back to life and giving it superpowers, I can finally look myself in the mirror, holding this ThinkPad, of course, and leave the shame about the X61 tablet rebuild failure behind.
