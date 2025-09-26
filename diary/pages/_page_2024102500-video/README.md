# ThinkPad X61 vs X61s: There Isn't Much!

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/07BjGPqOXYY/hq720.jpg](https://i.ytimg.com/vi/07BjGPqOXYY/hq720.jpg)](https://youtu.be/07BjGPqOXYY)

## Intro

So my [X61s](https://www.thinkwiki.org/wiki/Category:X61s) is slow, but the regular variant, the [X61](https://www.thinkwiki.org/wiki/Category:X61) is supposed to be faster, at least that's what I believed. The only way to find out was to try one myself, which I finally did. Having used a machine very similar to this one for a year, the X61 felt familiar, to say the least. But like most other machines I've bought at an auction, this one needed some fixes before it could be called complete.

## Initial State and Early Impressions

The device I received came with an [Ultrabase X6 Dock](https://www.thinkwiki.org/wiki/ThinkPad_X6_UltraBase), the same as the one I received with the X61s, but with the difference that this one wasn't in that great condition.

Even on the device itself, there are scratches all over the body with worn-out corners and this sticker that I was itching to remove as soon as I unpacked the package. It came with merely two 1GB RAM modules, no storage drive, no power adapter, a dead battery, and a mysterious noise from within the chassis.

The seller mentioned a fan error, so I knew what to expect. The machine would work if you hit the Escape key as soon as the error shows during startup, but that isn't how a ThinkPad should be, so I knew that would be the major fix during my restoration.

At first, I thought this was a mislabeling, and that this was an X61s itself. I compared this machine with my X61s and could barely find any difference until I turned the machines over. At the bottom, I realized there was a slight out-dent next to the battery, and the slot was slightly different as well, which would practically prevent the two devices from sharing the same battery, at least without some changes which we'll talk about in a moment. But then, I learned that the two machines are pretty much the same, and how would have I known that, had I not bought this one?

This machine wasn't in a great condition unlike my X61s, but man, it was fully loaded with components. It had the wireless card, and wireless modem module, in addition to another card next to it. This slot is empty on my X61s, but after some research, I learned that the module was supposed to be a [Turbo Memory](https://en.wikipedia.org/wiki/Intel_Turbo_Memory). It turns out, that it [wasn't an effective technology](https://www.anandtech.com/show/2252) back in the day, so it definitely wouldn't be of any use today either, but it was good to know that the machine was equipped with it, and most importantly, I learned something new! The other thing there was the mini fan underneath the palm rest that I had only read about. My X61s doesn't have that fan, and even the connection on the motherboard is sealed. Having an additional cooling fan underneath the palm rest clearly shows the struggle Lenovo might have had with a machine this small. Also, given this one's pretty much the same size as the X61s, I know exactly what heat we're dealing with here.

## Fixing the Fan Error

A Fan Error usually refers to the CPU fan, at least that's what I thought, so I took the entire thing apart, which if you'd ask me, isn't an easy job for one of these. I cleaned and re-lubricated the CPU fan, and performed a thermal re-paste without which you cannot get everything back together anyway.

When I started the machine, it still gave me the fan error, and now the suspicion was on the mini fan located underneath the palm rest. I learned that certain earlier units weren't equipped with this additional fan, but Lenovo introduced it in later models to overcome heating issues. Now you'd think that just removing it would solve the problem. It turned out, that as this specific unit was equipped with one from the factory, removing the fan shows the same error, minus the weird noise the fan makes when it tries to spin once when the machine is powered ON, and intermittently after that. Before ordering a replacement, which wasn't easy, I tried cleaning it, but with all the dust removal and re-lubrication with silicon oil, there wasn't any change. My final option was to order a replacement, which added weeks to the restoration with a long wait for the item to arrive from another continent.

## Restoring in Parts

Spending on a machine in this condition is risky, even more so for such an old one. Do not ask me how I know that, but I split the restoration into two parts.

## Restoration - Part 1

The first part of the restoration was absolute basics, involving as little money as possible, parts that I could use from other machines, and later on reuse if I ever had to abandon the process.

1. Replacing the thermal paste came along with servicing the CPU fan, and hence that was out of the way.
2. Then I had to perform a deep cleaning of the device inside-out, which this machine needed.
3. I had to ensure the machine was usable before I ordered a battery, so I re-used the spare battery from my X61s. You cannot buy a genuine battery for this machine anyway, even a used one, so I decided to use what I already had, with some small adjustments. I learned that one can use the same battery on the two machines through this attachment, which thankfully was something I had to remove and not add.
4. I used a spare 120 GB SSD I had lying around to test how the machine would perform under normal operating conditions.
5. I dropped the Turbo Memory module to save some battery power. I'll preserve this chip and I might even display it on my desk as a museum piece.
6. I ran [ZorinOS](https://zorin.com/os) for a few days to verify that everything else worked as well, which it thankfully did.

## Replacing the Fan

Once the fan arrived in the mail, replacing it wasn't too big of a deal. I just had to remove two screws and a power connector on the motherboard and put the new one in. However, the new fan came with its own mounting bracket. Now I'd call that generous, even with how unreasonably expensive this fan was, but as I already had a mounting bracket, I didn't need another one. I turned the machine ON to test whether this investment was worth it, and thankfully there were no errors, taking the machine right into Zorin OS, so that was a success.

## Restoration - Part 2

But the restoration had practically just started. Once I knew the machine was usable and worth the time and effort, I proceeded with the rest of the quality-of-life improvements.

1. I installed a 256GB SSD, just like I have for all my older ThinkPads.
2. I added a pair of 2GB DDR2 modules, making it 4GBs, which gave the machine a little more breathing space. I could have bumped it up to 8GBs, but neither is the DDR2 RAM cheap nor would it be utilized in a machine like this where the major bottleneck for today's tasks would be the Core 2 Duo processor.
3. I applied the Middleton BIOS mod to enable future hardware upgrades, which at least for the time being was faster SSD speeds.
4. I skipped the network card update unlike on the X61s. I had one lying around, but that one was reserved for another ThinkPad that we'll hopefully get to see in another video.
5. The keyboard wasn't in great condition, and the center scroll button was all messed up. I swapped the keyboard from another machine I had specifically bought for parts. Don't worry, we'll talk about that machine soon.
6. I did not upgrade the logos with IBM ones, unlike the way I did on my X61s, to keep the cost down for when I say goodbye to this machine. Besides, the exteriors weren't in that great condition anyway, so I thought I might skip the aesthetics.
7. Finally, with the hardware setup complete, I repurposed this unit as a test machine to experiment with my Linux setup. Virtual machines are one thing, but having a bare-metal ThinkPad could be invaluable for testing changes before propagating them into the rest of my fleet. Several big changes were coming to my setup, and this was going to be the machine for all that.

## Conclusion

So after a close-up experience with an X61, I learned that the differences between the regular model and the "s" variant aren't as big as you'd think. This one does run a tad faster though, due to the processor which isn't the low-power model we have in the X61s. Even then, what you can do with these machines is fairly limited. Nonetheless, these are indeed time capsules that someone like me can use to relive a time that they never knew existed.

Given the similarity with my X61s, I do not intend to keep it for long but instead, look for a new home where this machine can be back in service for years to come.
