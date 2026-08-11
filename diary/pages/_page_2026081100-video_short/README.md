# I Set Up a Gaming Distro on my T15g Gen 2 #ThinkPad #Linux #Gaming #Steam #Shorts

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/NDUsMW-0654/hq720.jpg](https://i.ytimg.com/vi/NDUsMW-0654/hq720.jpg)](https://youtu.be/NDUsMW-0654)

## Transcript

I had been running a dual boot between Void Linux and Windows on my ThinkPad T15g Gen 2. Windows for sim racing with the Logitech racing wheel and obviously Void Linux for practically everything else.

However, setting up the Nvidia driver packages on Void across machines with different hardware could be tricky, and even though I thought I had figured it all out, a recent major re-arranging of Nvidia packages on Void repos broke my Dell Precision T3600 and I had to specifically point it to Nvidia 580 legacy drivers for the GTX 1060.

Then I thought, how about using the third vacant NVMe slot on my T15g Gen 2 for a gaming focussed Linux distro so that I won't have to worry about this on that machine at least, and also free up my Void Linux storage drive for other things? After some investigation and looking past my new favorite, Nobara Linux, I decided to go with Bazzite. I used this Samsung P981 512GB NVMe SSD in the third slot, booted up into Bazzite through Ventoy, and decided to jump on the Bazzite bandwagon.

The installation was familiar but different at the same time. For example, connecting to the wireless network brought up the virtual keyboard. It is said that Bazzite doesn't allow dual-booting alongside other operating systems, but good for me, I had already decided to dedicate an entire storage drive for it. I just had to be extra sure which one I allowed it to nuke for the installation.

On first boot, it was pretending to be a Steam Deck. Out of the many good things, I could also use the startup animation from my Steam Deck.

Finally, I had to get bootloader control back to Void Linux so that this machine would feel whole again.

So at the end of the process, I had not one but two Steam Decks, except one of them was a beast of a machine being equiped with an RTX 3080. If this works great, I might as well clean the Steam setup from Void Linux and have a proper separation of concerns across the three operating systems. Let's see how this goes.
