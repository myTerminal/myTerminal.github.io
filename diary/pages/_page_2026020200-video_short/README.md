# I Learned About How Batteries Can Be Deceptive #ThinkPad #Notebooks #Computers #Shorts

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/h2oiIPAuT-c/hq720.jpg](https://i.ytimg.com/vi/h2oiIPAuT-c/hq720.jpg)](https://youtu.be/h2oiIPAuT-c)

## Transcript

Most of the ThinkPads that have come and gone have left something behind. The X220 taught me to use the TrackPoint to the point that I no longer need the super premium glass trackpads on the X1 Carbons and the X1 Nano. Similarly, the X61s pushed me to finally adopt Wayland through swaywm, such that with my dual configs, I barely feel a difference whether I’m running i3wm through X11 on an Nvidia-based ThinkPad, or swaywm on the rest.

Had I never had a slow ThinkPad like the X61s, I would’ve never been able to push myself to recreate much of my life’s worth of Linux configs again for swaywm, in hopes of squeezing barely an ounce of performance. But, there comes the display scaling on low-resolution screens. 

While scaling up can be done by only increasing the text size and keeping the UI unscaled, scaling down to be able to see more on a low-resolution screen can only be done by adjusting the screen DPI, which is a tricky space on Linux.

The reason to adopt Wayland was the slower computers like the X61s, but I’m having to make a choice that may need me to run X11 there instead, while I run Wayland on modern machines. Fractional scaling can not only lead to blurry rendering on an already small screen, but, as I’ve come to learn recently, given how Wayland compositors handle scaling, it ends up adding a rendering overhead on the GPU, which is counterintuitive to my purpose of using Wayland on these machines with non-existent graphical capability.

I have no problem with the SXGA+ screen on the ThinkPad T60, but on the X61s, I could either reset the scaling on the XGA screen to 96 dpi (which is barely usable) or drop back to X11 with blurry images. I guess I’ll go with the latter.
