# My Stable Computing ft. My Home Lab

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/j4IvdSv5ALI/hq720.jpg](https://i.ytimg.com/vi/j4IvdSv5ALI/hq720.jpg)](https://youtu.be/j4IvdSv5ALI)

## Intro

Since I realized how well [ThinkPads](https://www.lenovo.com/us/en/c/laptops/thinkpad) fit for my use and workflow, I knew they were not going anywhere anytime soon. I did try my hands on other makes and kinds of hardware, but my experience wasn't as delightful, as you can see in some of my videos. Today, I won't only ramble about my ThinkPads, but will cover a few machines that work behind the scenes and barely get the mention they deserve.

## The ThinkPad Slope

Before we talk about some interesting stuff that I haven't talked about earlier, let's knock a few things out of the way to calm the ThinkPad nerd inside of me.

It happened that I slipped down the ThinkPad slope a little too hard and ended up working (or should I say got an opportunity to work) with 55 ThinkPads in just a matter of less than five years. Then I grew up a little, maybe, and after exhausting all the interesting options that I could get my hands on, and after most of them are gone, all that is left is a set of nine chosen ThinkPads most of which serve a purpose and justify their role in the fleet.

## My Stable ThinkPad Fleet

So here are the three categories, each consisting of three ThinkPads:
1. Starting with the least useful category are the collector ThinkPads. These machines have been restored to a state much better the original, as compared to how their first owners may have experienced them. All three have also been restored with official Windows recovery media from IBM and Lenovo. 
	1. The [X61s](https://lenovo.fandom.com/wiki/X61s) is slow, but is still usable with a lot of patience. It now runs [Windows 7](https://en.wikipedia.org/wiki/Windows_7) with no trouble at all and barely feels as ancient as it is.
	2. The [X301](https://en.wikipedia.org/wiki/ThinkPad_X300) is unusably less capable, but it runs Windows 7 pretty well.
	3. The [T60](https://en.wikipedia.org/wiki/ThinkPad_T60) with ATI Radeon GPU running [Windows XP](https://en.wikipedia.org/wiki/Windows_XP) on its SXGA+ screen runs old [abandonware](https://www.myabandonware.com) videogames like a breeze.
2. On the other end of the fleet are the modern ThinkPads. Needless to say, these all run [Void Linux](https://voidlinux.org) and take care of much of my day-to-day computing needs.
	1. The [X1 Nano Gen 1](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-nano/22tp2x1x1n1) is my short commute machine when I need to travel as light as possible.
	2. The [T15g Gen 2](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadt/thinkpad-t15g-gen-2-(15-inch-intel)/wmd00000484) with an [RTX 3080](https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3080-3080ti) is my monstrous powerhouse that can take any task I throw at it without break a sweat. It runs a tri-boot setup (if that's the right way to call it?) with [Windows](https://www.microsoft.com/en-us/windows), [Pop!\_OS](https://system76.com/pop), and Void Linux, each for a very specific use-case, as I covered in a recent video.
	3. The [X1 Extreme Gen 3](https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-extreme-gen-3/22tp2x1x1e3) forms my primary notebook for everything while I'm indoors, but away from my basement. This is probably the best screen in the house with a 15" OLED display.
3. Between the two categories is a hybrid category. These three machines run Void Linux as well, but have varying levels of usefulness.
	1. The [X201 Tablet](https://www.bhphotovideo.com/c/product/756971-REG/Lenovo_2985C6U_X201T.html) has a bad battery that I do not plan to replace, as I've grown up from trying to overspend on usable batteries for machines that I may not even take outside my basement.
	2. The [T440p](https://www.notebookcheck.net/Review-Lenovo-ThinkPad-T440p-20AN-006VGE-Notebook.108423.0.html) is literally at the center of the nine machines, may I say, all the ThinkPads I've ever had, providing a little bit everything from every ThinkPad I've ever used. Now that's a proper all-rounder notebook. Afterall, it replaced my beloved [X230](https://www.notebookcheck.net/Lenovo-ThinkPad-X230.75842.0.html) which I'm sure is happy with its new owner.
	3. Finally, there's this [T14 Gen 1 Intel](https://laptopmedia.com/series/lenovo-thinkpad-t14-gen-1-intel) that I've put together with spare parts and is my most bruised machine with an imperfect screen, a cracked bottom panel and a few issues here and there. It just makes it easy for rough use on short or long trips, and it is that machine that I do not have to worry about.

## The One That Started It All

Now all the ThinkPads we talked about have some significance, but my fleet cannot be considered complete without the one that started it all (or rather restarted my journey with Linux), and it's not a ThinkPad, not even a notebook computer. My most used computer even today is still this [Dell Precision T3600](https://i.dell.com/sites/csdocuments/Shared-Content_data-Sheets_Documents/en/Dell_Precision_T3600_Spec_Sheet.pdf) that I built to be what it is now over the last six years. Paired with a [Dareu Cool68](https://www.newegg.com/p/N82E16823938011), a [seventeen year old mouse that refuses to die](https://www.logitech.com/en-us/shop/p/m185-wireless-mouse.910-002225), and a decent [ThinkVision screen](https://www.lenovo.com/us/en/d/accessories-and-monitors/monitors/thinkvision-monitors), this machine is perfect for almost everything while I'm at my desk. It's just a little too power hungry, so I cannot even think of keeping it running longer than I need it. Besides, bad things happen during a power trip when this thing's running. Don't ask me how I know.

## My Home Lab

So we covered the machines that I interact with directly, but there are a few beyond that as well, providing me with the rest of my computing needs.

1. To start with, I've mentioned this [ThinkCentre M600 Tiny](https://www.bhphotovideo.com/c/product/1303386-REG/lenovo_10g9001uus_thinkcentre_m600_tiny_pentium.html) numerous times. This rescued machine is very weak in terms of computing power, but has plenty to be the central [Syncthing](https://syncthing.net) data server in the house, along with a few cron jobs, and of course my very own, [salah-compass](https://github.com/myterminal/salah-compass). It runs Void Linux without issues.
2. The other machine is a [ThinkCentre M715q Tiny](https://www.lenovo.com/us/en/p/desktops/thinkcentre/m-series-tiny/thinkcentre-m715q-tiny/11tc1mt715q) with a Ryzen 3, and is the only one in its class that is actually connected to a screen and a keyboard. Needless to say, the entire set has been repurposed from e-waste as well. This one runs Nobara Linux and often forms a quick always-ON power-efficient access point for one-off tasks.
3. The third is the only one I've particularly purchased to be used as a server, and is obviously the most capable of the three. Balancing cost and computing power, this [ThinkCentre M75q Gen 2](https://www.lenovo.com/us/en/p/desktops/thinkcentre/m-series-tiny/11tc1mtm7g2/11tc1mtm7g2) with a Ryzen 5 Pro processor and 32GB RAM is plenty for running LXCs and VMs on [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview). It has the potential to let me scale my home lab gradually, without needing to add more machines as Proxmox VE makes it as easy as a few clicks whereas [community scripts](https://community-scripts.org) bring that down to just a single shell command.

And then there's always data sharing between the three through Syncthing and [NFS](https://en.wikipedia.org/wiki/Network_File_System) so they all work together. I've also made sure to externalize the data for crucial services (like my reverse proxy server "[Caddy](https://caddyserver.com)", and the dashboard using "[glance](https://github.com/glanceapp/glance)" that forms the home page for my home lab) so that I always have them backed up in a way. I realize simply syncing files across machines doesn't mean they are backed up, unless there is some versioning involved and one can restore an older backup when needed, but hey, at least it's something better than nothing. I can always improve on it if time permits.

I do not have a lot of services hosted at this point, as instead of adopting containers and VMs left and right that I wouldn't remember I have at my disposal, I plan to go slow and only add the ones I can justify the need for. The dashboard that looks relatively empty at the time of this recording may need multiple tabs and pages at some point in future as more LXCs gets added over time.

## Networking and Public Access

Now, all of these machines are connected to my home's local network. I've also invested in an unmanaged network switch and made sure they are connected directly through Ethernet which improves connection reliability, and saves me some administrative overhead with WiFi devices. Almost all the details of the network configuration is also documented, in case I needed to rebuild the setup from scratch in the future.

Accessing my machines over the public internet has been made possible through [Tailscale](https://tailscale.com), so no matter where I am on the planet, if I have internet access, I should be practically able to reach any of the machines we talked about in this video.

## Conclusion

I purposely skipped details like hardware and software configuration of individual machines, details about my home network and how I configured my cellphones, which you'd be surprised how carefully crafted a setup they run accompanied with overly detailed documentation. I realize most of those may be very specific to my situation, but there can always be future videos if I see value talking about them.
