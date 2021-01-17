# How my workstation setup is "almost" automated - Part 1

> This article is a transcript of a video that you can watch by clicking the below thumbnail. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/HToKwQZF71k/hq720.jpg](https://i.ytimg.com/vi/HToKwQZF71k/hq720.jpg)](https://youtu.be/HToKwQZF71k)

Setting up a computer (at least to me) is a very cumbersome activity, and even more so when it's a daily driver. In this short series of videos, I'll show you how my workstation setup is almost automated so the process is pretty quick and yet convenient so that I don't have to lose my mind every time I re-configure my daily driver.

## Background

By daily-drivers, I'm not referring to work laptops owned by your employer, which is a topic for another day, but take for example my personal computer on which I spend more time than I do even on my cellphone, there's so much to take care of. Also, if you're a Linux user like me, the setup is not as straightforward as it usually is for Windows, full of quirks here and there, and a lot of additional steps added to the process.

## What a setup feels like to me

For a few reasons, I find a computer setup even more tedious:

1. Activities like this tend to quickly make me feel overwhelmed. Part of this is because I plan a little too much, noting down every trivial step as if it would make the final result any better.

2. I expect things to be exactly the way I want them to be and tolerate almost zero deviation in my plan. So the plan that's (usually) already so detailed, becomes even more stressful, and then there's the fear of failure and a potential loss of the most valuable entity in this human life: time.

3. If at all the process spans across multiple sessions, the urge to drag it to the end doesn't let me sleep with peace; and focus on my other tasks gets affected as well.

These factors (along with a few more) drove me to create a system in place such that I don't lose my mind every time I configure a computer from scratch.

## Two kinds of setups

During all these years, I've performed at least two different kinds of setups:

1. **Full setup**, which could either be on a new machine or hard-drive or it could be an old machine undergoing some low-level changes in the setup like the partition table such that there's total data loss. This is the one I'm usually scared of, as there are more steps and hence more number of things to go wrong.

2. **Partial setup**, which is a re-setup utilizing a decent part of a previous setup such that I don't lose everything, and can continue from somewhere in between by refilling the gaps on the existing setup. This is the easier of the two kinds.

## My setup as a code

Since I moved out of Windows, one of the many things I loved about these UNIX-like operating systems (Linux and macOS) is that everything that can be done through a graphical interface as the normies do can also be done through the command-line. To me, the most obvious advantage of being able to do things over the command line is that one can create an automated script which when executed, can perform the same steps as many times as required, with virtually zero error.

I used this possibility of automation to convert my workstation setup notes (actually spreadsheets) into [a single Bash script](https://github.com/myTerminal/dotfiles/blob/20049c76ee6832dcd6635d0b1b36a632d853bb9a/.scripts/setup.sh), which later-on evolved into [a fully-fledged arrangement of scripts](https://github.com/myTerminal/dotfiles/tree/master/.setup) that can be considered as an independent program which as of today, constitutes a significant part of my [dotfiles on GitHub](https://github.com/myterminal/dotfiles). We'll have a detailed look at it in just a moment.

## Principles of my setup

Time for some theory now! I promise to keep it as less boring as I can.

There's no such official standard I follow in my setup scripts, but now that I think about it, I see at least four principles being followed very closely:

1. **Lean**: This means that not only the scripts are as [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) as possible, but I've also tried to make sure that [my software selection](https://github.com/myTerminal/dotfiles#software-selection) is such that it only includes a single software for a particular job. If at all I find a software that can replace two or more of the others already on the list, especially if it improves the results, I shorten the list by replacing the old candidates with a single new candidate. It also implies that I don't have a single software in the list that has no purpose in the system.
2. **Reproducible**: This was in fact the primary purpose to create this entire thing, so that I can re-create my software-setup with minimal effort or confusion, as many times as I need. This also means that every single persistent configuration change that I make on my computer needs to be done in a way that I can automate it. I shouldn't need to remember anything, the scripts should be capable of re-creating it for me. A simple example could be changing the default user shell.
3. **Documented**: This comes from the fact that I've placed plenty of comments for my own future reference, and also a lot of times the way the scripts have been arranged, that documents much of it. All this keeps evolving just like any other computer code does, but it always represents my most current computer setup for all the primary operating systems I use on all my personal computers, which at times could be two or three, each running a different operating system.
4. **Portable**: It goes without saying that as all this is hosted on GitHub, my dotfiles are completely portable and the setup can be executed on any computer with internet access. So not only do I carry my installation scripts, but I also have access to the same configuration files on each of my computers. An update is as close and simple as a `git pull`.

## How it started

As I mentioned in my earlier videos that I used to be a Windows user for 14 years until I switched to Linux in 2013. I started documenting my workstation setup on my first laptop computer, the [2010 Dell Studio 1558](https://www.dell.com/us/dfh/p/studio-15/pd). It used to be a reasonably detailed spreadsheet file, briefly mentioning the items my setup comprised of. Out of all the file versions I ever created, only one file was for Windows, but as I moved to Linux, a new file got created for every Linux distribution I hopped through, and the number was obviously not small.

I slowly started to introduce "category" as a column to group those applications (and games) and I learned that you could quickly aggregate a column of cells into an installation command that could install all of the applications at once. This definitely came from my younger brother, who was way ahead of me in the way he used Linux back then.

At one point, I eventually started maintaining [a single bash file in my GitHub dotfiles](https://github.com/myTerminal/dotfiles/blob/20049c76ee6832dcd6635d0b1b36a632d853bb9a/.scripts/setup.sh) with the command and so there was no need to maintain spreadsheets anymore. This arrangement also allowed me to document the commands required to configure additional package sources and remained as a single file for quite a long time until one day it all of a sudden exploded into multiple smaller files each for its own purpose.

There were at least two major overhauls to this project in the following years. The first one was when [I switched to macOS](https://github.com/myTerminal/dotfiles/commits/master?after=686317c09d4970832cc1c0f8d243f9e8436e8f53+509&branch=master) and wanted to make it work on two different operating systems at once. Then it mostly stayed that way with minor updates until my turning back to Linux that happened in late 2019, where at one point there were [four different operating systems supported at once](https://github.com/myTerminal/dotfiles/tree/f464c58c106e979fe9e79a28a12cd171fccd8933/.setup). For obvious reasons, the only two to remain there today are [Arch](https://archlinux.org) (my primary) and [macOS](https://www.apple.com/macos/big-sur) (just in case).

## Then came twiner

I keep mentioning [Linux for Everyone](https://www.linux4everyone.com) repeatedly and also the latter half of 2019 which was the start of my return to Linux for the second time, and that was actually the time I got to learn more about Linux than I ever thought I would. I looked at Bash from a completely fresh perspective and started applying my learning at various projects of mine, including [project-euler-solutions](https://github.com/myTerminal/project-euler-solutions). What this project actually is, it's way outside the scope of this video, but you can find the link in the description and check it out yourself if you're interested to know anyway.

I never had a proper introduction to shell scripting before and as far as I remember, my first shell script was indeed the simple packages installation script for my Linux setup. Needless to say, I started improving my setup scripts and soon realized that most of the scripts that I was writing could be re-used. Around the same time, due to my failure of being able to run a regular Linux distribution on my [Dell Precision T3600 desktop](https://www.ebay.com/itm/Dell-Precision-T3600-8-Core-2-60GHz-E5-2670-Wholesale-Custom-To-Order-No-OS/382071287250) due to the incompatibility of the super-old hardware with the latest [Xserver](https://www.x.org/wiki/XServer) packages, I literally had to learn setting up a command-line Linux for graphical use. More configuration meant adding more code to my setup scripts, and all this extra code was a perfect candidate for my library of functions for Linux setup and this led me to create [twiner](https://github.com/myterminal/twiner).

*Twiner* (as I call it) is a collection of Bash scripts for configuring Linux. It can either be used as a standalone program or otherwise as a library to build your own. Currently, only three major flavors of Linux are supported: [Debian](https://www.debian.org)/[Ubuntu](https://ubuntu.com), [Fedora](https://getfedora.org), and [Arch](https://archlinux.org) of course. These along with the derivative distributions of these major distributions cover the greater part of the Linux community, at least for the non-veterans of Linux.

## Conclusion

I didn't want to make this video longer, so in the next video, we'll walk through a demo of how I perform more than 90% of my Linux configuration through a prompt-based set of scripts written using *twiner*.

That's all that I have for this video, so let me know if you liked this video through either the Like/Unlike buttons or through your thoughts, feedback, and ideas in the comments. Thanks for watching it till the end, may the maker watch over you, see you in the next video!
