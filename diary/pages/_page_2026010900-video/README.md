# I Unlocked My ThinkPad T440p for More Power

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/ERzMBU5P1xQ/hq720.jpg](https://i.ytimg.com/vi/ERzMBU5P1xQ/hq720.jpg)](https://youtu.be/ERzMBU5P1xQ)

## Intro

The [T440p](https://www.notebookcheck.net/Review-Lenovo-ThinkPad-T440p-20AN-006VGE-Notebook.108423.0.html) is still one of my best notebooks to carry to most places. However, it was still running the stock BIOS with a hardware whitelist, and hence the stock WiFi and Bluetooth card, and now was the time to take care of that as well.

## Deciding on the Upgrades

So, we're talking about a machine that I picked up for parts. After the adoption, the machine has had a 1080p IPS screen, a backlit keyboard, a better trackpad, a fingerprint sensor, a smart card reader, an [Nvidia](https://www.nvidia.com) GPU that doesn't need proprietary graphics drivers, 16GB of RAM, 512GB of storage drive space, an M.2 SATA drive for secondary OS, and multiple batteries with sufficient runtime. I'm sure I missed a few things.

Out of the few leftover upgrades, which include a faster wireless module, a much faster quad-core CPU, and the third storage drive, I realized I didn’t need the latter two. However, given how this is my only notebook of its class after the [X230](https://www.notebookcheck.net/Lenovo-ThinkPad-X230-2306-2AU-Laptop-Review.75317.0.html) left, I thought upgrading the WiFi and BT would make it more future-proof.

## A Message from the Sponsor

Before we jump into the process, here’s something I wanted to share. So the T440p is pretty usable in today’s time, except for this charging connector, which is proprietary from Lenovo and requires you to carry a dedicated charger for this machine. What if there were a way, without modifying the hardware, to use the same charger for my other devices that use a USB-C connector, and the T440p? Introducing the Evgoer charger, which is so compact that even the box is smaller than an actual Lenovo charger. It has two outputs, including a USB-A and a USB-C port. It also comes with a USB-C to Lenovo square PIN adapter, which means I can leave this in my travel bag and use it regardless of whether I’m carrying my X1 Nano or the T440p. I have included links in the description that allow you to check out this product on their official website, along with several other products they have for sale. Let’s get back to the video.

## Module Choices

The [Intel Wireless 7260](https://www.intel.com/content/www/us/en/products/sku/75439/intel-dual-band-wirelessac-7260/specifications.html) combines both the WiFi and BT, so the easiest would have been to use it for both. It’s already a much better card than what I’ve seen in my other machines, and the [Intel Centrino Ultimate N-6300](https://www.intel.com/content/www/us/en/products/sku/59474/intel-centrino-ultimaten-6300-dual-band/specifications.html) wasn’t going to be much of an upgrade. Out of the few choices I came across, I decided to go with [Intel Wireless AX200](https://www.intel.com/content/www/us/en/products/sku/189347/intel-wifi-6-ax200-gig/specifications.html), as thankfully, it wasn’t very expensive either.

## Hardware Whitelisting

As I mentioned before, there isn’t a ready-made whitelist-removed BIOS for the T440p, like [Middleton’s BIOS](https://www.thinkwiki.org/wiki/Middleton's_BIOS), nor an exploit like [1vyrain](https://1vyra.in), and the only way to remove the hardware whitelist was to patch the BIOS using [this programmer kit](https://www.ebay.com/itm/375648284795) that I had to invest in, taking me back to my school days. There are plenty of tutorials on the web on how to do this, and I learned that it’s much less complex than it looks, especially if you’re careful. You need another computer, though, and I’ve read that using Linux or macOS is much easier than Windows, so I used the [X1 Nano](https://www.lenovo.com/us/outletus/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-nano/22tp2x1x1n1) running [Void Linux](https://voidlinux.org). You can find the web links to resources in the description. The step I faced the most challenge was to fix the connector on the BIOS chip, but the rest was “almost” smooth. This is how it goes at a high level:

1. Update to the latest BIOS: As I was going to patch the same BIOS image that I was running, I wanted to start from the latest official image to get the most out of the machine, so I updated from 2.53 to 2.56.
2. Take a dump of the existing BIOS: This gets you the official BIOS installed on the machine out as an image.
3. Patch the BIOS as per your needs: This allows you to selectively unlock the features you’d like in the BIOS image file.
4. Sign the patched BIOS image: This enables the T440p to accept the modified BIOS from a source that Lenovo would otherwise consider untrusted.
5. Flash it back to the machine: This gets the patched and signed BIOS to the machine.

Once we’re through everything, we boot into the new BIOS image and find several new advanced options that weren’t there with the official BIOS before.

## Upgrading the Module

With the hardware whitelist removed, all that was left was to replace the M.2 2230 wireless module. Thankfully, it worked right out of the box. I usually do not do benchmarks, and the placebo in itself is worth it.

## The AC7260 Could Be Used

Now, the Intel AC7260 that came out of the T440p is a pretty decent module. I can use it on the X61s, but as I’ve read about issues with the indicator LEDs, I think I’ll hold off for now, while it stays with Intel Centrino Ultimate N-6300.

## Conclusion

So that made the T440p even more worthy of being taken along on a trip. I’m not sure about the third storage drive upgrade, and I’d rather keep the DVD drive. Also, I’m not ready for a better CPU just yet, as I’m happy with the dual-core Intel Core i5 for now.
