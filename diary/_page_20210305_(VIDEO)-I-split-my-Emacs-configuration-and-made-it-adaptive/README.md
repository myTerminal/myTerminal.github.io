# I split my Emacs configuration and made it adaptive

> This article is a transcript of a video that you can watch by clicking the below thumbnail. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/a4QPtWCGFJ8/hq720.jpg](https://i.ytimg.com/vi/a4QPtWCGFJ8/hq720.jpg)](https://youtu.be/a4QPtWCGFJ8)

## Quick recap

I've been maintaining my [Emacs configuration](https://github.com/myterminal/.emacs.d) on GitHub for seven years now. It was my second project on GitHub (after [project-euler-solutions](https://github.com/myterminal/project-euler-solutions-legacy)) and was initially named [EmacsConfiguration](https://github.com/myTerminal/dotfiles/tree/4ecec332d0df3caba2dc1aa114713a7d90bdfcc3).

As I switched from [Windows](https://www.microsoft.com/en-us/windows) to [Linux](https://www.linux.org), I repurposed the project to contain my [dotfiles](https://github.com/myTerminal/dotfiles) and Emacs wasn't the only focus anymore. A few years later, recently, I extracted my configuration into a separate project so that my Emacs configuration could once again get all the attention it deserves.

## Evolution of my `.emacs.d` over the years

Since [the first commit in March 2014](https://github.com/myTerminal/dotfiles/commit/b3ba16ec258b0f18f8aa05167f5081dc5b2f5d6b), the project has undergone several major changes.

Back when it started, it used to contain the source files of even the packages that I installed. This looked ideal and simplistic at first, but I soon realized a major problem. Every single package update (which depends on how often I update and how many packages the configuration holds) led to tens of updated files being pushed into the project, and especially the files that (a) I don't have control over (b) already reside in a home project of its own.

Thanks to some heavy inspiration from [a friend](https://ryandsouza.in/about) (who also got me into Emacs in the first place), I solved this issue by shrinking everything down to a single [Elisp](https://www.emacswiki.org/emacs/EmacsLisp) script file such that the project only contained names of the required packages and not the packages themselves.

Moving a little further along with Emacs, I came across a few heavier packages like [helm](https://github.com/emacs-helm/helm) and had to implement a "light" mode such that not everything was loaded every time Emacs was started. This was even more important as I did not use [Emacs Server](https://www.gnu.org/software/emacs/manual/html_node/emacs/Emacs-Server.html) and every Emacs launch was a totally new instance. Fun fact: I still don't use Emacs Server and instead use it as a regular application.

Several months later, I found lighter alternatives to those heavy packages (ex: [ivy](https://oremacs.com/swiper) for helm) and simplified the configuration once more to avoid migraines while making changes to my own configuration.

## Issue with the current state

The project, in its current state, was being used on at least four computers running three major platforms: Linux, [macOS](https://www.apple.com/macos), and Windows (at work) but then I recently realized (a little too late) that my configuration was too focused on running Emacs as a graphical application and almost no time was spent making sure that it ran well inside a terminal as too.

This was OK until recently I had to work on my computers over the [command line](https://en.wikipedia.org/wiki/Command-line_interface) and could not run a [graphical environment](https://en.wikipedia.org/wiki/Graphical_user_interface). Needless to say, my Emacs configuration was pretty unusable and I found myself using [Vim](https://www.vim.org) instead. I also had this experience on my cloud servers where I host [my portfolio](https://myterminal.me) and a few other web applications, so Vim was my only help.

Part of this was good as I finally became friends with Vim, such that I was able to do more than just enter "edit" mode and quit with or without saving the opened file. However, I decided that it was time to redesign my Emacs configuration from the ground-up such that I could use it even in the absence of a graphical environment.

## Plan

The plan was to have two separate configurations, not the way I had it earlier when I shifted relatively heavier packages into a separate "full" mode, but this time with a totally different focus. As per the plan, the default mode was supposed to be command-line focused. There would be a condition, which when true, would load the other (and smaller) half of the configuration designed for graphical mode.

As it goes without saying, the configs for command-line mode would definitely run in a graphical environment but it wouldn't be possible the other way, which was in fact the reason for the entire activity.

The switch was imagined to be a variable state or a function call that would help me determine whether the current interface was a graphical one or an old-school command line.

Just as it sounds, the activity was a fun one. I parsed through each line in every single script file, re-arranged things in the way it was planned, and in some cases, threw away what I didn't need.

## New state

As you can see, my `init.el` file now has two separate functions to start those two identical configurations, residing in their own respective directories. The **basic** configuration is first loaded and then a decision is made whether the second **standard** configuration is needed and if it is, it's loaded as well.

The next two steps are common to both, like loading Mass Effect quotes for my own custom screensaver for Emacs and then printing a welcome to my own self. I still have to think about how I can make this simpler, maybe that would be simply throwing them into the **basic** configuration? Not sure, but that's not that important for now.

## A mini-demo

A video without a demo would be quite a theory lesson, so let's have a look at a super-quick demo.

When I start Emacs as I usually do, either from my application launcher or even from the terminal, it starts exactly as it used to before this activity of splitting the configuration. But the problem was never in this mode.

Let's now start Emacs ignoring the window-system, that is by running it like `emacs -nw` in a terminal, you can see how it's almost exactly the same configuration, just without color themes, variable fonts, and a few other visual preferences that one would only care about while using Emacs in a graphical environment.

## Final thoughts

As you saw, this change was one of the most significant changes that I've made in my Emacs configuration since the start of the project. By splitting the scripts into two, I can now use Emacs in the presence and even in absence of a window system, with almost no loss in functionality.

I plan to adopt a very similar arrangement in both my starter packs: [ample-emacs](https://github.com/myTerminal/ample-emacs) and [super-emacs](https://github.com/myTerminal/super-emacs) soon.

## Conclusion

That's all that I have for this video, so let me know if you like it through either the Like/Unlike buttons or through your thoughts, feedback, and ideas in the comments. You can also choose to subscribe to show me your support and encourage me to make more of such videos. Thanks for watching it till the end, may the maker watch over you, see you in the next video!

