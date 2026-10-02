# I'm Glad I Chose Void Linux (Yet Another Reason) #VoidLinux #Nobara #Fedora #Linux #Shorts

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/1Ht9a5KCHyw/hq720.jpg](https://i.ytimg.com/vi/1Ht9a5KCHyw/hq720.jpg)](https://youtu.be/1Ht9a5KCHyw)

## Transcript

Did you ever find yourself excited about the next big thing only to fall back to where you started from? Let me tell you a story.

If you would've watched my other videos, you know how Void Linux cured my distro-hopping syndrome. But my Void setup isn't any other setup: it is one that I handcrafted and improved over the last several years, tested on tens of machines and got used to a little too much.

I also covered recently how my fear of missing out landed me on Nobara Linux, twice, and I even set it up as my secondary distro on the ThinkPad T14 Gen 1. But then as my bridge was barely a workaround that wouldn't let me access my entire toolset on Nobara, I took another step to adopt Nobara into my dotfiles similar to how I've done with other secondary distros earlier.

Adding another operating system to my dotfiles obviously wasn't as big of a challenge, but the same fresh installation that worked like a charm started to show signs of trouble as soon as I ran my configuration script through it. The error I kept getting was that there was no audio device on the machine. I couldn't find it under the dropdown on the top right, nor in the Gnome sound settings, nor could I use the multimedia keys on the keyboard to control the sound volume.

Interestingly, in order to debug the exact addition from my side that was causing the issue, once I installed the packages in small batches, the issue wasn't there anymore. Turns out while Void Linux never had an issue with hundreds of software packages being install at once as a single command, Fedora couldn't manage to keep things working, probably because it was being done from a live graphical session. On reading more about it, I learned that probably the only reason installing packages in batches worked was the reboots in-between batches. So that means a configuration script like mine isn't suitable for Fedora and its forks.

Now this doesn't make Nobara or Fedora bad in general, but makes me believe that those distributions aren't really suited for my kind of setup where literally every single software package that makes its way into the system is explicitly installed.

Finally, it also gets me back to appreciating Void Linux even more. No wonder I haven't been able to escape the Void since several years now. Maybe I never will!
