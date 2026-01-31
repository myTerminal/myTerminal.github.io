# Fixing WiFi Issues on my ThinkPad T60 #Linux #ThinkPad #Shorts

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/ONX6-4s9VS4/hq720.jpg](https://i.ytimg.com/vi/ONX6-4s9VS4/hq720.jpg)](https://youtu.be/ONX6-4s9VS4)

## Transcript

My experience using the ThinkPad T60 hasn’t been the smoothest. Firstly, the 3GB RAM limit of the chipset, even with a 64-bit CPU, has been pretty limiting. And then, I carried it to work recently, and noticed a few more things besides the extra weight I had to carry around.

I noticed that the same machine that had no trouble working with my home WiFi network could not work with the guest network at work (work, work, work), nor a WiFi hotspot from my Android cellphone. It does show as “connected”, but there is no network traffic.

The only way to fix this would have been to replace the WiFi module, as the T60 was one of the last machines of its kind, and this wasn’t an issue for T61 onwards. But then there’s the hardware whitelist you have to deal with, as we missed the Middleton’s BIOS by just a model year.

People had been talking about Zender’s BIOS that I couldn’t find, but I found this TTAV134’s BIOS, and IceModBIOS. I decided to go with the former due to more references and reviews online, though I learned that this BIOS was never intended for this machine officially.

I tried to boot the ISO from Ventoy, which is when I learned this was what they call an “El Torito floppy-emulation ISO”, which, without going into a lot of details, is a way to emulate a floppy drive while booting from a compact disc. So, I used my T440p to burn this tiny ISO into a compact disc, wasting almost the entire 700MBs. It boots into MS Dos, where all you need to do is hit “Y”. After a reboot, I loaded setup defaults, and then I was done. Afterwards, I realized that I had the charger unplugged all this time, which is something that you should never do while playing around with the BIOS. I’m glad I didn’t blow it up.

I chose to use this Intel Centrino Advanced-N 6205 that I had lying around, as it came with only two antenna connections, unlike the other cards I’ve put in my ThinkPads.

And, it still did not work. Then, I ordered this Atheros card that was said to be free of such issues, and would work well on this machine, except for the presence of a third antenna connection, which we can ignore and not tell anyone about.

And, it still did not work, and I’m not sure how practical the Ethernet cable will be everywhere, but at least I have a better WiFi card!
