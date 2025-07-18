# Improved Way of Connecting to My AI Server #AI #LLM #Shorts

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/H8mF2hKG-pY/hq720.jpg](https://i.ytimg.com/vi/H8mF2hKG-pY/hq720.jpg)](https://youtu.be/H8mF2hKG-pY)

## Transcript

I have a couple of updates to my AI server we saw in the last video, the project that wasn’t quite complete. For the first problem related to power efficiency, I couldn’t figure out the wake-on-LAN feature, so the machine still needs to be manually turned on and off. I’d say it's not a big deal, but I haven’t given up yet; I've just moved on to other higher-priority items.

The other problem was around connecting to the server. Configuring Fabric to always point to the server created a strong coupling from my other computers, and I couldn’t even figure out a way to point Ellama on Emacs to this remote Ollama service.

I wrote this one-line on-demand script that uses `socat` to create a TCP proxy between the client and server, and it even prompts for a server I can choose to connect to, as there is more than one of those machines that can handle the job.

I even wrote an init service to do this at a point, but then, for minimalism, decided to only run the proxy when I needed, kind of how I do with the server itself.

I’ll most likely post another update as soon as I crack the wake-on-LAN.
