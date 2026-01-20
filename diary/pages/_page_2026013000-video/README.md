# Running Windows XP Like It's 2006

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/szMjk5hBFzM/hq720.jpg](https://i.ytimg.com/vi/szMjk5hBFzM/hq720.jpg)](https://youtu.be/szMjk5hBFzM)

## Intro

In the last video, I switched machines more than halfway through the restoration process. While I run Void on the one that made it to the end of the video, I thought to myself, why not restore the other one as well, but more like [IBM](https://www.ibm.com) designed it to be used? In this video, we'll travel back to 2006 and see what it was like to use an [IBM ThinkPad T60](https://en.wikipedia.org/wiki/ThinkPad_T60) back in the day with [Windows XP](https://en.wikipedia.org/wiki/Windows_XP).

## Choosing the Hardware

So, this T60 is pretty usable, although it didn't receive the upgrades the other one did, and hence it still runs a lower-end 32-bit Intel Core Duo CPU. I replaced the thermal paste and installed 3GB RAM, which is the maximum this machine can practically utilize. For storage, I added a 128GB SATA III SSD that I had lying around.

## Choosing the Right Edition of Windows XP

Windows XP is probably my most used Windows, even more than [Windows 7](https://en.wikipedia.org/wiki/Windows_7) and [98](https://en.wikipedia.org/wiki/Windows_98), as by the time Microsoft released later versions of Windows, I had already switched out to [Linux](https://www.linux.org). Now I've only used Windows XP 64-bit, but neither would it work with this license key underneath the notebook, nor do we have a 64-bit CPU, so I chose to go with Windows XP Pro 32-bit, which was exactly what IBM chose for it.

Now, this isn't Windows 7 we're talking about, that will automatically install all the hardware drivers post-install. Doing all that manually on a 20-year-old ThinkPad would be a lot of work, and I wasn't ready to put up with it, which is when I learned the right way to install Windows XP on one of these machines.

## Installing Windows the Right Way

IBM offered system recovery disks to customers so that they could "restore" their machines to a state where they would have the operating system installed, with the right device drivers, including antivirus, and even IBM wallpapers. I learned that this was the best way to experience one of these with the least amount of work.

## Challenges

But then things aren't as easy as they seem.

1. These were eight ISOs, most likely because DVDs weren't really that popular back then.
2. Using these images through [Ventoy](https://www.ventoy.net/en/index.html) wouldn't work due to the way the USB drive gets unmounted in the early stages of booting into the recovery process.
3. I did have several optical drives across machines, but the newest one in the house was around 13 years old.

## Preparation

I decided to use the optical drive in the [T440p](https://www.notebookcheck.net/Review-Lenovo-ThinkPad-T440p-20AN-006VGE-Notebook.108423.0.html), and as I had exactly eight recordable CDs from back in the day, and one of them failed during the burning process, I invested in a set of unused discs from a local thrift store, and I had more than I needed.

## The Recovery Process

So this is how it goes.

We start by making sure we're running "Compatibility" and not "AHCI" mode under SATA settings. We boot into the first disc in the series, which is the Rescue & Recovery disc. This part of the process takes very long, across several loading screens of different kinds. Once it does finally get to the menu, there are many more options here, among which there is one to restore your computer.

We're given a couple of options, and on selecting that we want restore it absolutely to factory state, and after a couple of confirmations and agreements, the copy process starts. It takes a while, and after it's complete, it reboots and asks for the next disc in the series, the supplemental disc, and within seconds, asks for the first of the recovery discs, as if it just wanted to make sure you had the supplementary disc but not do anything with it at the moment. The copy process continues, eventually asking you for disc 2. From here on, all that you need to do is wait for the prompts for the next disc and go from 1 through 6 in sequence. It displays two progress bars: one for the current disc and another for the overall process, but no estimated remaining time. Now these discs only contain a few hundred Megabytes per disc, and something like this would take modern computers barely seconds to crunch through.

I could have recorded the entire process in real time, but then the video would be several hours long; at least I could show the discs being replaced one after another, just for the sake of completeness. Also, this isn't the most interesting part of the process, as the main visual show starts after the final disc, which is the supplemental disc once again, after all eight discs have been used.

At the end of the process, the machine restarts, gets you back into Rescue and Recovery for one last time. Here, it performs the recovery for several minutes, eventually prompting for a reboot.

## Post Recovery Setup

Post reboot, you see a DOS prompt running what appears to be a long batch file.

It restarts once again, showing the Windows XP loading screen, waits for a long time on a black screen with only a huge mouse cursor, starts Windows XP, showing you a glimpse of 2006, runs a few IBM customizations alongside a Command Prompt window executing Windows batch files, and says that the computer might be at risk. This process takes a while, even with a solid-state drive, which this machine wasn't equipped with from the factory.

It wasn't clear as to at what point I should remove the supplemental disc in the process, so I kept it inside until a later point, though I learned that it wasn't necessary.

By the way, I'm running through this very quickly, as it was a slow process as well.

It quickly installs graphics drivers, some [ATI](https://www.amd.com) utilities, and other graphics-related software, and there's a reboot, and another reboot, taking you back to Windows XP with the right screen resolution, and this time with the startup sound, but then you realize it still needs to perform some more "customization". I think this is the point when it installs IBM applications, possibly including ThinkVantage. There comes the ThinkPad wallpaper, the antivirus, the first error, a restart, and then another one into Windows XP.

And then some more "customization", and a restart, another restart into Windows XP, conversion from [FAT32](https://en.wikipedia.org/wiki/File_Allocation_Table) to [NTFS](https://en.wikipedia.org/wiki/NTFS), yet another restart, into this animated welcome wizard with sound that I had not seen before. This is the point where it starts to appear something that was designed to be shown to the end user.

It asks you to select a few basic things, name the computer, set an administrative password. It fails to connect to the internet. I declined registration with Lenovo and Microsoft. It prompts for the user's name, and you're in.

It prompts for enrollment in fingerprint security, but then restarts a couple of times. It says that the user needs to logon to enroll in fingerprint security. It does log you in automatically this time, though.

It asks you set the user's password, set answers to security questions, and then it performs some configuration, and asks you to restart.

It asked me to log in using a password for this time, but didn't take me to fingerprints setup. I had to start ThinkVantage Productivity Center to enroll fingerprints. It took me a while to register my fingerprints using this fingerprint sensor, after which I restarted Windows to see if it does prompt for fingerprints during startup, and it did, which is when I experienced my first password-less login into Windows XP.

And that concludes the restoration of Windows XP on this ThinkPad T60, just the way IBM intended. It was reminding me of available wireless networks, but I'd rather not take this thing online, with the outdated security of Windows XP.

## Result

This machine was working pretty smoothly with Windows XP 32-bit, as compared to how I had been seeing with Linux, and this is something I do not understand the reason for. Needless to say, everything worked as it should, and technically speaking, as much as you'd call this notebook underpowered, it's much more capable than the machines that we used to run Windows XP on back in the day. We barely ever had more than 512MB of RAM in our assembled desktops, and we did not know solid-state drives were even a thing.

## Some Nostalgic Tests

Now, how could you install Windows on such a retro machine and not try running a few games? I downloaded a few of my favorite games from [myabandonware.com](http://myabandonware.com) to see how those work here, because again, the machines we used to run these games on were far less capable than this ThinkPad T60.

One of the games I tried was [Midtown Madness](https://en.wikipedia.org/wiki/Midtown_Madness), and I could bump up to max settings, and it still ran smooth. Fun fact: the only reason I know Midtown Madness is due to a demo version we had from a monthly computer magazine back in India called Computers at Home, and it used to come with compact discs with an assorted collection of demo software, including [Winamp](https://en.wikipedia.org/wiki/Winamp) and [Windows Media Player](https://en.wikipedia.org/wiki/Windows_Media_Player) skins. We never had the full version of the game. Speaking of Midtown Madness, I also tried [Midtown Madness 2](https://en.wikipedia.org/wiki/Midtown_Madness_2), and again, this was the first time I experienced how the game developers intended the game to be played. This, too, was just a demo we had with three vehicles and a handful of quick races that we used to play over and over again, at around 8 FPS, as we had nothing else to play.

I could literally go on and on, trying out every single video game that we either couldn't run well on our home PC back in the day, or never even had. I guess that could be a dedicated video, and before I get carried away further, let's conclude this video.

## Conclusion

I learned a lot while making this video, and also got to relive some of my very good childhood memories. My wife will have no idea what I'm talking about, but the final segment of this video was very emotional for me to record. Also, with this setup, this ThinkPad T60 is ready for a new home. I might create an alternative Windows XP setup for my own T60, which is now equipped with even better hardware. And, these games aren't going to play themselves, are they? I can at least try these out on my T60, and relive a few more of those memories.
