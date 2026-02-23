# Diving Deeper into the World of Web 3

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/7PT_8jrgNA0/hq720.jpg](https://i.ytimg.com/vi/7PT_8jrgNA0/hq720.jpg)](https://youtu.be/7PT_8jrgNA0)

## Intro

So in the last video, we talked about the two parallel webs, highlighted the differences between them, looked at a couple of approaches for hosting decentralized websites with [IPFS](https://ipfs.tech), and finally talked about some limitations of mapping a Web 3 domain to a Web 2 website, at least the way we did it. Much of that is still unusable for a person who simply wants to browse your website. In this video, we'll look at building the exact opposite, something that we can show to our customers.

## A Few Points as of Q1 2026

To start with, if you've seen those ads that tell you that Web 2 is dead, and that you should stop paying for domain renewals and instead build your business on Web 3, let me break it to you: much of that is false advertisement. Please do prove me wrong in the comments in case I'm missing something major.

As Web 3.0 domains aren't natively supported by web browsers other than [Brave](https://brave.com) and [Opera](https://www.opera.com), and a typical visitor wouldn't install a web extension, not to mention their unavailability in most web browsers, I do not see that changing in the near future.

[ENS](https://ens.domains) does provide you a way to expose your Web 3 domain to Web 2 browsers by using domain suffixes, but those domains aren't a lifetime purchase. I'd really like to own a domain in a true way, instead of renting it from a domain provider, the way we've been doing with Web 2 domains.

Decentralized content can very well be accessed by anyone through public gateways like ipfs.io. This doesn't need any Web 3 capability in your web browsers.

## Plan for this Video

[My last video](https://www.youtube.com/watch?v=7PT_8jrgNA0) was all about pointing Web 3 domains to Web 2 content. Now, until Web 3 domains become more supported, the only way you can reach your audience, or rather, your audience can reach you, is through Web 2 domains. For this video, we'll use a Web 2 domain, in fact, a subdomain of my personal web address, and point it to some decentralized content. As decentralizing the website backend is a topic in its own right, all that we'll host will be a static website through IPFS. What we'll have at the end will be a setup that will allow our Web 2 visitors reach our decentralized website.

## DNS Link

Let's start by talking about [DNSLink](https://dnslink.dev). It was created by the team at [Protocol Labs](https://www.protocol.ai) (the creators of IPFS), and they designed it as a general-purpose standard for linking any content path to a domain name. This means that it wasn't only meant for IPFS, though IPFS is currently its biggest user.

## Mapping

If you've ever mapped a subdomain to a server IP, this is pretty similar. You need to get into your domain management portal, the section where they allow you to make changes to DNS settings. Instead of creating an “A” record, unlike how you do it otherwise, we need to create a new TXT record with the name of the domain or subdomain you'd like to use, and a value `dnslink=/ipns/<ipns-key>`. We set a short TTL, preferably 15 or 30 minutes.

The IPNS key you see here was created the same way as we did in the last video, where I used kubo for IPFS tools in the terminal, added content, pinned it, and published it under an IPNS key I created specifically for this exercise. One thing I learned is that instead of using the hash of the HTML file, if we use the hash of the parent folder, relative addressing between the `index.html` and static assets becomes easier, otherwise we'd need to address them using their hashes, and that would be too much.

Anyway, once the DNS changes are applied, you should be able to use the subdomain to browse the IPFS content. And, as I mentioned earlier, as the domain itself is a Web 2 domain, this should be accessible from any regular web browser, not just the ones with native Web 3 support.

## Freename.io

Let's step back a little, or rather forward in this case. Apart from UnstoppableDomains, which I demoed in the last video, I've also invested in [Freename.io](http://Freename.io) for Web 3. This provider is a little different in several areas, one of which is that with a little investment, you can be a domain registrar yourself. I'm not a fan of their advertisements, similar to the ones I mentioned at the start of the video. Regardless, these domains can be used as a decentralized identity, which would be a topic for another video.

Anyway, the domain mapping page for Freename looks a little similar to those with Web 2 domain providers. You can use DNSLink here as well to map to an IPFS or IPNS hash. There's one other difference here from UnstoppableDomains, and that is that changes to your domain, such as this, aren't free. It costs you a little something in order to save these changes on the blockchain. Neither do I have any credits in my cryptowallet, nor am I in a rush to use Web 3 domains, so I'll leave it there.

By the way, if you're looking for a Web 3 domain like `<yourname>.localdomain`, I can offer you a discount, as, if you may have guessed, I'm the owner of the top-level domain “.localdomain”. I've already reserved `myterminal.localdomain` and even `localhost.localdomain` for myself, for when the time is right. Isn't that cool? But for now, let's stick to Web 2 domains.

## My Script

In order to automate the process of hosting decentralized content on a Web 2 domain using DNSLink and making frequent or occasional updates, all the steps can be bundled into a single shell script, as we can see here:

```bash
#!/bin/bash

# Check for required arguments
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <path_to_folder> <ipns_key_name>"
    exit 1
fi

FOLDER_PATH=$1
KEY_NAME=$2

echo "Adding content to IPFS..."
NEW_CID=$(ipfs add -r -Q --pin=true "$FOLDER_PATH")
if [ -z "$NEW_CID" ]; then
    echo "Error: Failed to add folder to IPFS."
    exit 1
fi

echo "Reading currently published data..."
OLD_IPNS_VAL=$(ipfs name resolve "$KEY_NAME" 2>/dev/null | awk -F'/' '{print $3}')

echo "Publishing to IPNS..."
ipfs name publish --key="$KEY_NAME" "/ipfs/$NEW_CID"
if [ $? -ne 0 ]; then
    echo "Error: Failed to publish to IPNS."
    exit 1
fi

echo "Unpinning the previously published data..."
if [ -n "$OLD_IPNS_VAL" ] && [ "$OLD_IPNS_VAL" != "$NEW_CID" ]; then
    ipfs pin rm "$OLD_IPNS_VAL"
    ipfs repo gc
else
    echo "No previous CID found to unpin, or CID remains unchanged."
fi

echo "DNSLink record should now point to $KEY_NAME."
```

This script takes in the name of the directory where the files to be hosted are located and the name of the IPNS key it needs to be hosted against. It adds all the content in the source folder recursively, pins everything, unpins the old data, and publishes the new data against the specified IPNS key.

The complexity around unpinning old stuff can be dropped by using something that is called [MFS](https://proto.school/mutable-file-system).

## MFS

If you find the content-addressed nature of IPFS a bit complicated to work with, the Mutable File System (MFS) is your best friend. It is a tool built into IPFS, and it allows you to treat content-addressed data as if it were a local hierarchical directory. Instead of manually updating CIDs every time you change a file, MFS lets you use standard-style commands to move, copy, and edit files while it handles the underlying complexities by itself.

## Improved Script with MFS

So, switching a few commands to use MFS instead, the script can be improved as shown:

```bash
#!/bin/bash

# Check for required arguments
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <path_to_folder> <ipns_key_name>"
    exit 1
fi

FOLDER_PATH=$1
KEY_NAME=$2
MFS_PATH="/www"

echo "Adding content to IPFS..."
NEW_CID=$(ipfs add -r -Q --to-mfs="$MFS_PATH" "$FOLDER_PATH")
if [ -z "$NEW_CID" ]; then
    echo "Error: Failed to add folder to IPFS."
    exit 1
fi

echo "Publishing to IPNS..."
ipfs name publish --key="$KEY_NAME" "/ipfs/$NEW_CID"
if [ $? -ne 0 ]; then
    echo "Error: Failed to publish to IPNS."
    exit 1
fi

KEY_HASH=$(ipfs key list -l | grep "$KEY_NAME" | awk '{print $1}')
echo "DNSLink record should now point to $KEY_NAME."
echo "Verify at https://ipfs.io/ipns/$KEY_HASH."
```

With this change, we do not need to pin content added to MFS, as they are not garbage collected, and hence we do not need to unpin the previously pinned content. So effectively, a four-step process is simplified down to two steps only.

## Conclusion

I can carry a directory with a ready-to-deploy website as a Syncthing folder across my [ThinkPads](https://www.lenovo.com/us/en/c/laptops/thinkpad), and with the script we created, deploying a new version to IPFS would be as simple as a command. Next up would be to explore running backend logic on a decentralized network and I've been reading about [SmartContracts](https://www.ibm.com/think/topics/smart-contracts) and [dApps](https://en.wikipedia.org/wiki/Decentralized_application).

## Outro

That's all I have for this video, and thanks for watching it to the end. May the maker watch over you. See you in the next video!
