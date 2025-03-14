# Taking Care of Batteries

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/O2u5bxdxswI/hq720.jpg](https://i.ytimg.com/vi/O2u5bxdxswI/hq720.jpg)](https://youtu.be/O2u5bxdxswI)

## Transcript

Over the last few years, I’ve learned that batteries do not only wear off with age. The most popular element is the count of charge and discharge cycles it goes through, and there are other lesser-known elements like the operating temperature, either hot or cold.

But then I learned that batteries also wear off with over-charging, for when you have them plugged in even after they’ve reached a hundred percent charging capacity. And, they also wear off with over-discharging, which is when the device turns itself off when the battery is critically low. To protect batteries from these two extreme charge levels, one can set charge-discharge thresholds. So with a charge threshold, the device won’t charge beyond a certain charge level, and with what I call a discharge threshold, the device would turn itself off way before the remaining charge is at a critically low level. I’ve even written a Linux service to achieve that, but maybe one can take care of it by manually monitoring the battery level.

Now how do you set charge thresholds you’d ask?

The easiest method I’ve found is through Linux by writing to these device system files, because everything in Linux is a file. Or you can do that in Windows through software like Lenovo Vantage or otherwise, and similar tools on macOS. Certain machines also have this as a setting under BIOS or firmware settings.

So, what do you do to keep your batteries running longer? Let me know in the comments!
