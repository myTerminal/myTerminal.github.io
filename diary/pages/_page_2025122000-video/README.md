# I Built a Backup System That Outlives Me

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/j9I44ghVfLU/hq720.jpg](https://i.ytimg.com/vi/j9I44ghVfLU/hq720.jpg)](https://youtu.be/j9I44ghVfLU)

## Intro

Many of us gather a lot of digital data during our lifetime, and some of us really care about that data. I, personally, am very particular about how, where, and in what form it is stored, so that it is available to me when and where I need it. I created a system to help do that during my lifetime, and also for my family after I’m gone. Let’s have a look at it in this video.

## Problem Statement

My quest to find the most secure and reliable method for data storage has led me through various solutions, including external storage drives, cloud storage, and lately, a network of [Syncthing](https://syncthing.net) nodes, which offer more than sufficient redundancy.

While these methods have served me well, ensuring continued access to my data for an inheritor after I'm no longer around is challenging. Storage drives can fail, cloud services come with trust issues, and even replicating data across multiple computers is constrained by password requirements.

## My Solution

*[Ursa](https://github.com/myterminal/ursa)* is designed to address these concerns by:

1. **Centralizing Data:** Keeping all data in a single location
2. **Enhanced Security:** Protecting data behind encrypted volumes, accessible only through independent passwords
3. **Redundant Copies:** Maintaining more than two redundant copies of all data to ensure reliability
4. **Regular Synchronization:** Continuously syncing data from its various sources to keep it up-to-date
5. **Error Checking and Refreshing:** Periodically refreshing and checking data for errors to ensure ongoing integrity

With *ursa*, I could have peace of mind knowing that my data is securely managed and more accessible in case my family needs it after I'm gone.

## Demo

So, for this demo, we’ll need an external storage drive with sufficient storage space for a host Linux system, and most of the rest to contain the data itself. The host Linux system makes sure that there is no external dependency, and the data can be accessed using any computer to come in the future that can boot from an external storage drive.

You basically need to have a boot volume and a root volume for the Linux distro of your choice, and then a set of three data backup volumes. I used LUKS encryption to keep the data secure. There are only a few things that *ursa* needs to be able to perform as intended, and you can find them all in the GitHub repo, along with suggested steps to achieve them.

Once the Linux distro has been installed, installing *ursa* is as simple as a single command.

During the lifetime of the owner, they will do:

1. Regular incremental backups to make sure *ursa* has the most up-to-date data
2. Integrity refreshes to make sure there is at least one backup volume that is accessible when needed

When the time comes for a family member to retrieve the data in the absence of the data owner, the following is how the process would look:

1. A family member plugs the storage drive on a computer, booting into the host Linux using a method depending on the make/model of the computer
2. The host Linux system boots and automatically logs the user in
3. The family member types `ursa access`, hits `ENTER`, enters the vault password that the owner had shared earlier
4. On successful authentication, *ursa* unlocks the vaults, finds the most recently updated one out of the three, and opens it within a graphical file manager.

## Conclusion

I’m not sure if this is the most practical data backup and archiving system, but do let me know what you think, or if there is anything I can improve to make it more suitable for its use-case.
