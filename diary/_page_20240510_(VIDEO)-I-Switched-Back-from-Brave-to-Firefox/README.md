# I Switched Back from Brave to Firefox

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/snX-1kmzqzE/hq720.jpg](https://i.ytimg.com/vi/snX-1kmzqzE/hq720.jpg)](https://youtu.be/snX-1kmzqzE)

## Intro

Do people make faces at you when they find out that you do not use Chrome as a web browser? Well, in my case, they do. You know, I used to do that to people back when I didn’t see past my super favorite [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer). Thankfully those days are long gone, more than a decade ago actually, and now my web browsing needs are way different.

## A Quick Recap

I’ve hopped through [Chrome](https://www.google.com/chrome/), then [Chromium](https://www.chromium.org/Home), then [Firefox](https://www.mozilla.org/en-US/firefox/), and then recently [Brave](https://brave.com/). I remember how my initial switch had a purpose, which was switching to a better web browser. However, it all was only to later realize that I was now giving more data to [Google](https://www.google.com/) than I was before. Firefox was great for a while, but with the direction [Mozilla](https://www.mozilla.org) was going in for Firefox and beyond, Brave felt like a good new home. I could use [my own Chrome extensions](https://chromewebstore.google.com/detail/chrome-live-bookmarks/fconcakelnfiacccnghcjhbmddloahfn), the interface felt a little more user-friendly, with a lot of additional niceties. Technically, now I was using Chrome again, without the Googliness, and things were far more privacy-oriented, but then you’d ask, why would I switch out?

Brave had been working great, but is (or at least at the time of this recording was) still available for [only a few major Linux distributions](https://brave.com/linux) along with being also available as [Flatpaks](https://flathub.org/) and [Snaps](https://snapcraft.io/). On [Void](https://voidlinux.org/), I do not have Snaps, and [the Flatpak version](https://flathub.org/apps/com.brave.Browser) wasn’t very usable, so I had been using a compiled binary I downloaded from their [GitHub releases](https://github.com/brave/brave-browser/releases). I even got [my custom script](https://github.com/myTerminal/dotfiles/blob/04f704c255f129586af7f557d6f7c842a9fa9ee3/.setup/forge-config.lisp#L343) to work to be able to set it as my default web browser. All was good until this happened…

## Why Would I Switch Out from Brave?

I used to sync my browser extensions using [Brave’s sync chain](https://support.brave.com/hc/en-us/articles/360021218111-How-do-I-set-up-Sync), and that worked for all the machines I tried reproducing my setup on since I switched to Brave, except my last one. While [setting up my most recently acquired machine](https://github.com/myTerminal/dotfiles/blob/master/.setup/docs/setting-up-a-new-machine.org) (which is something I have to go through much more often than an average user), all extensions were pushed to this new browser except my password manager companion, [KeePassXC](https://keepassxc.org/). You’d think that wouldn’t be a big deal as you could simply sign in to [Chrome Web Store](https://chromewebstore.google.com/detail/chrome-live-bookmarks/fconcakelnfiacccnghcjhbmddloahfn) and install it from there, but after hours of attempts to somehow get it to install, it didn't work either. And yes, I even dropped down to building the extension from [source](https://github.com/keepassxreboot/keepassxc) and loading it onto my browser in Developer Mode, but as you might have guessed by now, that didn’t work either. I cannot live without my passwords, and I’m sure neither can you.

Also, if you would've noticed me mentioning using the Chrome Web Store and my Google account for extensions on Brave, you can guess how ironic it sounds to leave Chrome for a private browser like Brave and still have to use my Google account. This was one of my plans to stop using my Google account for Chrome extensions on Brave, but like most other projects of mine, this never got prioritized, and I had been fooling myself for all this while.

## Why not Vivaldi?

Where would I go now? [Vivaldi](https://vivaldi.com/) is a pretty popular choice among fans, but there are several reasons I’d stay away from it at least for now. A popular one is that [it isn’t open-source](https://vivaldi.com/blog/technology/why-isnt-vivaldi-browser-open-source/), and will not be any time soon. Honestly, I couldn't care less about this in exchange for a system that works and hasn’t been directly (or indirectly) acquired by one of the companies I try to stay away from. But… 

1. Every time I looked at the browser, it felt intimidating with all the stuff that’s going on inside. I mean having more features is often great, but a text editor within a browser? I’d not want another [Emacs](https://www.gnu.org/software/emacs/) to take over my life, besides, I already have a preferred text editor, which is Emacs itself. So, nope!
2. Even if I did want to go with Vivaldi, it’s [not available on my primary operating platform](https://vivaldi.com/download/), which is Void Linux, so there’s no way I can.

In short, not Vivaldi, at least not yet. I wouldn’t comment about the future, as I’ve done that plenty of times and contradicted myself a few months down the line after declaring my decision to go against the normal, with a pinch of overconfidence. Not this time at least!

## Why Firefox again?

Returning back to Firefox was an obvious choice for several reasons:

1. I have [huge hopes for the future of Firefox](https://www.mozilla.org/en-US/mission/) given the recent changes at Mozilla as an organization and their active development around [Thunderbird](https://www.thunderbird.net/en-US/) and [K-9 Mail](https://k9mail.app/), both of which I use on my machines and mobile device.
2. Firefox is literally the only major web browser that isn’t [Chromium-based](https://www.reddit.com/r/ProgrammerHumor/comments/127c50r/its_all_just_chromium) and yet has a huge ecosystem for extensions, etc. I respect them for that.
3. I know that it worked for me before, so it should definitely do this time as well.

## Concerns

I did have a few concerns about this switch though:

1. One of the most significant ones would be losing the collapsible tabs feature that’s only available on Chromium-based browsers.
2. I’d be losing the integrated support for [IPFS](https://ipfs.tech/) and [UnstoppableDomains](https://unstoppabledomains.com/), something that only the Brave browser comes with by default
3. I’d lose [Brave Wallet](https://brave.com/wallet) and would finally need to look for a cross-browser crypto wallet, something that I was very happy about for not having to do as Brave had me covered there. Funny enough, I barely created my first wallet a couple of months ago, before which I always disabled it as a feature in Brave and found it unnecessary in a web browser. Here I am talking about losing it!

## Elements

Alright, so with this new (or rather oldish) setup of mine with Firefox, I’d need:

1. an [Android client](https://www.mozilla.org/en-US/firefox/browsers/mobile/) for my mobile browsing, which there are several official versions for
2. a sync chain, which is handled by the Firefox account so I have all my devices synced at least for the limited data I share with Firefox.
3. my web bookmarks (1300 in count currently), which I thankfully extracted out of my web browser into [Raindrop.io](https://raindrop.io/) so that I do not have to worry about moving them out and into a different web browser ever again
4. my passwords on KeePassXC (640 in count currently), which I’ve anyway been keeping out of the browser for a long time now
5. [Brave search](https://search.brave.com/) as a custom search engine, just for my sanity
6. browser extensions through the [Firefox browser add-ons](https://addons.mozilla.org/en-US/firefox/), so no problem there
7. a couple of additional extensions for [Web 3](https://web3.foundation/) support. See! Firefox has it all.
8. [MetaMask](https://metamask.io/) as my crypto wallet which would probably only have a couple of NFTs and zero funds for the time being

## Major Changes

So with all this in place, there are several major changes:

1. Sync between my browsers now happens through the Firefox account itself
2. I finally gained back access to the amazing [container tabs](https://support.mozilla.org/en-US/kb/how-use-firefox-containers) that aren’t still there in Chromium-based browsers
3. I need an external search engine to be able to use Brave Search, which is way better than DuckDuckGo anyway
4. I installed a couple of extra extensions for Web 3 support, as I mentioned before
5. Finally, another additional extension for the crypto wallet along with a native [Android app](https://play.google.com/store/apps/details?id=io.metamask) for MetaMask

## Losses

With this change, I did lose one thing though: the support for Web 3 on my mobile device as neither does the Android Firefox client have it, nor do they have extensions to enable it there. This should be OK for now, as Web 3 isn’t useful to me yet, at least on my mobile device. We can take care of this in the future while I worry about the other more important things.

## Outro

That's all that I have for this video. Thanks for watching it till the end, may the maker watch over you, see you in the next video! And yes, "Free Palestine!".
