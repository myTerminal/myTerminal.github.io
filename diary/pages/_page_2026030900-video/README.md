# I'm Leaving Firefox Once Again

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/6Mjrko3nQ6c/hq720.jpg](https://i.ytimg.com/vi/6Mjrko3nQ6c/hq720.jpg)](https://youtu.be/6Mjrko3nQ6c)

## Intro

Since I switched out of [Google Chrome](https://www.google.com/chrome), I've hopped between [Firefox](https://www.firefox.com) and [Brave](https://brave.com) more than once. This time, going even further with minimalism, I took another leap in my journey of browser hopping with something that many would call a downgrade.

## What I Liked About Firefox

Firefox has been the only major web browser, or rather family of web browsers (if you include a hundred forks based on Firefox), that isn't Chromium-based. How that helps is a topic too deep and also something that has been discussed plenty of times all over the web.

For me,

- It is a web browser that almost all websites still support
- It is available on all operating systems I've run on my computers, including Windows, macOS, and tens of Linux distributions I've used
- It is available on major app stores for Mobile devices
- It lets you create a bridge between desktop and mobile browsing by sharing your browser history, open tabs, etc., even though I've externalized my passwords and bookmarks long ago
- Its support for web extensions is second to none, and it even allows you to install many of those on the mobile web browser

## What I Was Concerned with About Firefox

With all the good things in place, the constant decline of [Mozilla](https://www.mozilla.org), concerns with data privacy, my constant pursuit of optimizing my tools for older [ThinkPads](https://www.lenovo.com/us/en/c/laptops/thinkpad), and still needing an online account to sync across your devices (unlike Brave's Sync Chain) were a few of the reasons I was looking for a switch.

## What Would I Switch To?

However, switching out would have meant losing some of the Firefox-exclusive features that I've gotten myself used to in the last few years, for example, tab containers and [uBlock Origin](https://ublockorigin.com). But that doesn't mean one couldn't switch to one of the many Firefox forks that are often praised for their design philosophies. Keeping things simple, I shortlisted two: [Waterfox](https://www.waterfox.com) and [LibreWolf](https://librewolf.net).

### 1. Waterfox

Waterfox aims to be a privacy-respecting Firefox alternative while maintaining a polished, user-friendly experience with features like signed binaries, auto-updates, and a responsible legal entity behind it. It avoids extreme privacy measures that harm usability, making it suitable for users who want enhanced privacy without sacrificing convenience.

What I loved the most about Waterfox includes being able to run private tabs alongside regular tabs, and a slightly more polished interface than the regular Firefox. 

### 2. LibreWolf

LibreWolf focuses on maximum privacy and security by default. It hardens Firefox out of the box by disabling telemetry, blocking trackers and fingerprinting, removing Mozilla services, and shipping with uBlock Origin and strict privacy settings. It prioritizes anonymity over convenience, targeting users who want a "set-and-forget" private browsing experience, even if it means reduced compatibility.

What I loved the most about LibreWolf was how lean, lightweight, and "no-nonsense" it is. It has the browser sync through Mozilla account disabled by default, unlike how other privacy browsers like Waterfox or Brave still allow you to log in using your Mozilla or Google account.

Everything was looking great until I restarted the browser to find that it doesn't persist login information across browser sessions.

## My Choice: LibreWolf

After a lot of thought, I decided to go with LibreWolf, and I thought I'd tweak the ephemeral behavior by switching a few settings.

Now, by default, it would lose all login info every time I restart the browser or the computer itself. One way to handle this would have been add exceptions for domains that I trusted, and let the browser prepare a clean slate for the rest of the web by default.

I took a different approach by turning off the "Delete cookies and site data when LibreWolf is closed" option, which many would find counterintuitive, as it makes LibreWolf lose one of its main features. I used this interesting web extension named Temporary Containers and enabled "Automatic Mode" so every newly opened tab would be opened in a disposable container by default, until I explicitly open it in a container of my choice. This kind of helps me simulate private tabs next to the other tabs as we have in Waterfox, while also having every single private tab isolated from each other, unlike how it usually is, where all the private tabs are kind of in the same container. For some reason, the way Waterfox has been implemented, I couldn't get Temporary Containers to work on it during my evaluation.

Anyway, so by going this route, instead of explicitly allowing certain trusted websites to persist information in the browser, now it works pretty much like a regular web browser, but every newly opened tab is being sandboxed, away from browser data from the "trusted" tabs.

## Feature Mapping to LibreWolf

Now, in terms of how the major browser features would be mapped from Firefox to LibreWolf,

- My web bookmarks would still reside on [Raindrop.io](https://raindrop.io)
- My passwords and other secrets would still stay with [KeePass-XC](https://keepassxc.org)

All that I'm losing is being able to share my browsing history across machines, and also being able to send a tab across them, but I can figure something out, maybe add them to Raindrop temporarily from one machine, open it up from another, and delete them?

## A Few Changes I Love the Most

While I was switching things around, I also decided to switch to vertical tabs, which is something I failed to do a few times I tried earlier. My new arrangement with Temporary Tabs would also help me reduce the dependency on an ephemeral browser like Mullvad, and I can finally keep my primary web browser as the default and still stay protected from unknown links I open from my emails within Thunderbird.

## Android Client

All that is left is an Android client, which doesn't exist for LibreWolf yet. I will either stick with Firefox there or switch over to Waterfox, at least until I choose between [Iceraven](https://github.com/fork-maintainers/iceraven-browser) and [Bromite](https://www.bromite.org).

## Retrospective

One of the things stopping me from getting into these relatively obscure web browsers was the need to be able to have the same browser across my machines, including the mobile device, and have it sync my browser-related data, like history, and be able to send tabs between them. Now that I'm free of those constraints, it gives me a very different approach towards web browsing in general, such that it takes me one step further towards better privacy on the web.
