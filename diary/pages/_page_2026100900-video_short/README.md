# Would You Self-Hosted a Service You Heavily Depend On #SelfHosting #Computing #Shorts

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/8dnywV6KVLw/hq720.jpg](https://i.ytimg.com/vi/8dnywV6KVLw/hq720.jpg)](https://youtu.be/8dnywV6KVLw)

## Transcript

So I talked about my growing home lab and how I've started to self-host applications within my home network, and though it's barely a start of hopefully a rock-solid setup, to rationalize moving things from the public cloud down to a local machine was a huge shift in my mental model.

When using a cloud service, you have to not only depend on them to make it accessible to you, but also trust them with your data and activity, the former of which you almost never own, but at least when its up and operational, you know that you can easily access it from anywhere on the planet.

With self-hosting though, I've always had concerns with owning all the responsibility of hosting, running, and maintaining the service, and let's say if I did it all right, it should also be available to me anywhere and any time I need access to it.

You need a personal hardware that would run 24x7, would be connected to a stable internet connection, and runs a hypervisor like Proxmox VE, or containerization platform like docker, or otherwise just a regular operating system that would keep your services running. For being able to access them from anywhere, if you do not have the luxury of a static IP, services like Twingate or Tailscale can do wonders, the latter being my platform of choice.

So then maybe one can self-host the service they depend on, but then would you trust the reliability of your cheap (and possibly repurposed) local home server, or would you still considering using a public cloud service with their promise of high uptimes? If you think about it, if you lose access to a remote service that you depend on for a critical use-case, getting access to your data may be close to impossible. However, if your local server malfunctions, there may be ways you can still access your data, because technically, the data is still within your private network, on your own local hardware.

To make things more convincing for the skeptical one inside of me, I like to take it a level further by mounting data from an external directory that is synced with my other machines through Syncthing. On top of that, when that data is plain text, that just opens up a world of possibilities for being able to access that data from a text editor like Emacs or else, from literally any machine or even a cellphone.
