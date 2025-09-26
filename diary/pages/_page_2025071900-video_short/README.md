# Upgrading the Storage on My Dell Precision T3600 #Computers #Linux #Shorts

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/Q25J93M_FuI/hq720.jpg](https://i.ytimg.com/vi/Q25J93M_FuI/hq720.jpg)](https://youtu.be/Q25J93M_FuI)

## Transcript

As I’ve mentioned several times, with all the ThinkPads that have come and gone, the only machine that has stayed with me, practically the one that started it all, is this Dell Precision T3600. This machine has come miles with me since I bought it on eBay a few years ago, with two GPU upgrades, wireless add-ons, a higher capacity PSU, 64GB ECC memory, and 512GB SSD storage, and these are still some modest upgrades for this platform.

This machine is over a decade old, and the bottleneck has only shifted with every single upgrade I made to it, with my current two being the Intel Xeon E5-2670 octa-core CPU, and the half-terabyte SATA SSD storage, the latter being my focus in the recent weeks. Now for someone who has serviced around tens and tens of machines in the last few years, this shouldn’t have been any different. You swap the storage drive with a higher capacity storage drive, move as much as possible and re-setup the rest, but the reason of me making this video is to share with you something that I learned the hard way.

Officially, this machine can support a few 3.5” or even 2.5” SATA SSDs, but I wanted to go a little wild by getting this 1TB M.2 2280 NVMe SSD, of course, through this PCIe Express to M.2 adapter. This would supposedly allow even faster memory access without being limited to the SATA interface speeds, with a small caveat. I already knew that this system doesn’t support booting from an NVMe drive, so we’ll still need this SATA drive around. It turned out, there was more to it. After hours of hitting my head against the wall, I realized, even the root volume needed to be on the SATA drive, and after moving my volumes around to make it work, it became one of my most complex setups with volumes spanning across two different storage drives of very different kind, just because I was trying to achieve something that the machine wasn't designed for.

Now, it stores a little more than just boot and root for me, and that includes this massive 32GB of swap space, and still a couple hundred GBs of leftover space for another operating system, who knows, maybe Nobara?

So that leaves me with only one bottleneck, which is the CPU, but it’s already “fast” enough for me, and the T15g Gen 2 is way faster anyway, so I’d probably not worry about it for another decade or so, unless I live long enough to reconsider.
