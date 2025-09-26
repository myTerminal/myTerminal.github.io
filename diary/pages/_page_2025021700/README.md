# The Long Awaited Steam Deck is Here!

## Intro

A few months ago, I finally got a [Steam Deck](https://store.steampowered.com/steamdeck) and I still do not believe it. But now there’s no more stopping by the [Nintendo](https://www.nintendo.com/us/switch) section in Walmart and staring at the [Switch](https://www.nintendo.com/us/switch). I mean an ARM-based Tablet by a company I respect, running [Arch Linux](https://archlinux.org), optimized for [Steam](https://store.steampowered.com/steamdeck) and having more buttons than the [Steam Controller](https://store.steampowered.com/app/353370/Steam_Controller), and all that for a price less than the Switch? Heck yes!

## Before We Start...

So before I proceed, I’d like to state that this isn’t yet another review of the Steam Deck; rather, here I'm trying to fill in the gaps I didn’t see other people talk about.

## Steam and Steam Controller

Playing Steam games on a computer using my Steam controller is awesome, but then what would you say if that entire thing (more or less) gets combined into a single unit? I’m not a fan of mobile gaming, which is why you’d never see me playing anything on my mobile phone, even though [Android](https://www.android.com) has recently turned into quite a decent gaming platform with several great titles being available on the Play Store.

However, this is the Steam Deck we’re talking about. So it would be pretty hard for me to call this mobile gaming as it lets you bring your entire Steam library with you, which if you might have seen mine, I’m pretty blessed there. Besides, the first thing one would note about the Steam Deck is how huge it is, and that’s way larger than the other popular handheld gaming consoles we know and love.

## The Steam Deck

So yes, I compared the Steam controller with the Steam Deck, but that's like comparing Apples to Pineapples! One is merely a controller, while the other one is a full-fledged computer! I mean there are several things I find similar, one of which is the rough, non-rubberized chassis that we don’t see with newer devices these days. But this thing certainly reminds me of the Steam controller, with several differences, many of them being pretty obvious. Here, we have two touchpads instead of one, and two pairs of grip buttons behind the device instead of only two behind the Steam controller. Also, the triggers do not click when you press them all the way in.

One super-impressive thing I found about this device is how there are multiple ways to type on the keyboard. You obviously have the touchscreen, which neither am I a fan of nor is it that efficient otherwise. But then you can use the keyboard using the two touchpads below your two thumbs. It’s the most unique typing experience I’ve had in years, in fact, ever!

You know the rest about the Steam Deck as it’s been out for ages now, and there are thousands of videos that have covered it all with great detail.

## Things I Didn’t Know About

There were certain things I didn’t know about this device.

1. I didn’t know this device had a touchscreen!
2. There are gyro sensors that you can use in games to perform certain actions like looking around and aiming. That’s cool!
3. One other cool thing I found is that this device has a battery storage mode. Little things like these show how [Valve](https://www.valvesoftware.com) paid attention to detail and they knew what they were doing. I haven’t used this one yet, but I’ve seen it in a video once.

## But I’m Not a Gamer (anymore)!

OK, so a Steam Deck is a cool machine, but I’m not a gamer anymore, at least as much as I was back in the day. Let’s just call this an experiment, or maybe an excuse to find some time to knock-off titles from my To-Play list.

## My Setup

Now obviously I won’t just treat the Steam Deck as a gaming machine. It’s a completely functional computer in disguise and a pretty capable one at that, so maybe I might treat it as one like my [ThinkPads](https://www.lenovo.com/us/en/c/laptops/thinkpad) in the long run. But for now, I’ve kept things simple and only performed the following changes:

- I set the hostname to go with my other machines. This time though, I didn’t have to play around with the `/etc/hostname` file, but it did let me do that from within the Settings.
- I enabled hidden files in [Dolphin](https://apps.kde.org/dolphin) from within the Desktop Mode and changed the default view to list, just the way I like it.
- I pinned [Konsole](https://apps.kde.org/konsole) to the taskbar so that I can run some quick terminal sessions on the go in case I need to.
- I set up the user password, so I can use `sudo` commands now.
- Finally, I unlocked the read-only filesystem so that I could make changes to it.

```bash
sudo steamos-readonly disable
sudo pacman-key --init
sudo pacman-key --populate
sudo pacman-key --refresh-keys
```

## Battery

Now there’s a battery in there, and the way I’ve been over-conscious about my ThinkPad batteries, I couldn’t help but explore possibilities of setting charge thresholds here, and this is what I found:

1. Valve did not provide a way to set charge thresholds through the regular settings menu.
2. You’d find tens of posts asking if one can do that on a Steam Deck, but the general audience here doesn’t care about it. Some believe it isn’t necessary, and some just want to use the entire capacity of the battery instead of limiting it between 20 to 80 percent, which is merely 60%.
3. Some believe that Valve may already have implemented it behind the scenes such that when it says the battery is charged at 100%, it may be 80% underneath. Upon my investigation, that clearly isn’t the case, and you can easily verify that from the KDE energy management window.
4. I finally resorted to running commands on my own, but it didn’t work either.

So with all those methods out of the way, there’s still one that remains, which is for me to manually keep an eye on the battery charge level and make sure I do not over-charge or over-discharge the battery. I know how difficult it can be on a gaming machine while you’re deeply invested in a game, but what other choice do I have?

## Tiny Nitpicks

I do have a minor nitpick with this device, and that’s really the only one, which is that the keys are not backlit. I mean I haven’t seen another console or controller having backlit keys, maybe because I do not have any experience with handheld consoles, but not being able to see the keys in the dark is a thing here.

## Another Linux Computer?

If at all I could get to a point where I decided to use it as another Linux computer, I might:

- Try integrating my dotfiles so that it would be a part of my fleet
- Set up a minimal computing setup with some software packages that I use on my other machines because I’ve already used Arch Linux as my daily driver a couple of years ago.
- Evaluate it for a subset of my computing workflow, which could involve controlling and monitoring my Linux servers and my desktop.

But till any of that happens, I can at least try to knock a few short titles off the list.

## Conclusion

Look how much I’m trying to be what I am not anymore! Would the Steam Deck pull me back to being a gamer? Or would it end up becoming an eBook reader for me? We’ll see...

Meanwhile, I can once again say “I use Arch BTW!”, or can I?
