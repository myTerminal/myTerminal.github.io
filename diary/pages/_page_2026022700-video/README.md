# Peeking into the World of Web 3

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Hence, certain statements may not make sense in this text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/hgYzSX98ArU/hq720.jpg](https://i.ytimg.com/vi/hgYzSX98ArU/hq720.jpg)](https://youtu.be/hgYzSX98ArU)

## Intro

The web is [moving fast](https://www.geeksforgeeks.org/blogs/web-1-0-web-2-0-and-web-3-0-with-their-difference), and some of these changes are so significant that most of what we do on the web may not even feel relevant soon. This video has been in the making for almost two years now, and I'm glad I'm finally sharing what I learned about Web 3. 

## Two Different Webs

Web 3 isn't new, and even though the adoption hasn't been nearly as much as a fraction of Web 2, which is what we know as the web, there has been a lot of development on this side that most of us do not notice. The two webs co-exist on the internet, essentially separate from one another, and there are ways to cross this line, some of which we'll talk about in the upcoming sections.

But then, if your [Google Chrome](https://www.google.com/chrome), [Mozilla Firefox](https://www.firefox.com), and other web browsers only let you browse Web 2, how can you access Web 3? As it goes at the time of this video, one of the only web browsers that supports Web 3 natively is Brave.

Your browser needs to resolve a URL into an [IP address](https://en.wikipedia.org/wiki/IP_address) to find where the content is hosted. While browsers like Brave have this built in, most standard browsers don't recognize Web 3 addresses out of the box. To bridge this gap, you usually need a web extension to translate these decentralized names. The browser connects to a domain name resolver that acts as a bridge to the blockchain, similar to how it connects to a [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) in the case of Web 2. The only problem is (and this may change in the future), that there are multiple domain name resolvers, so you have to install an extension for each one you'd like to be able to connect to in order to resolve corresponding Web 3 domains. Please let me know if things have changed by the time you're watching this video.

## A Typical Website with Web 2

An over-simplified setup for Web 2 would involve two primary elements:

1. an always-ON dedicated server (or group of servers behind a [load balancer](https://en.wikipedia.org/wiki/Load_balancing_(computing))) that hosts your content over the internet in order to respond to requests from around the world
2. a domain name, which is a human-readable address that is mapped to the identity (an IP address) of the host server (or group of servers)

As decentralization is one of the core principles of Web 3, most of these changes significantly. 

## Decentralization Changes Everything

Before I talk about the differences, please do note that I may not be able to talk about these concepts in the most academically accurate manner, but the upcoming sections will at least get you started in your own journey with Web 3.

1. To start with, the most important change, unlike how the content in Web 2 is located through the identity of the host, here in Web 3, everything is addressable by the content itself. Take for example, every single time you hit firefox.com, you're referring to the same server, and even if the content of the website changes, it will still be addressable with the address firefox.com. In Web 3, however, what you connect to is the content itself, and not a server that provides the content.
2. But then, every time the content changes, the address through which it can be accessed also changes. Imagine needing to point to a different web address every time there's an update on the website. But then, how would you even learn about the new address if the old URL keeps serving you the outdated content? That's quite a paradox, isn't it?
3. The domains that host your content are owned by you, not the domain provider. For example, I need to keep renewing my domain subscription with [domain.com](http://domain.com), without which I'll lose access to my website address. With Web 3, the domain name providers, at least the ones that I've worked with, offer you a name for a lifetime fee. Once purchased, you are the one who owns the domain, practically forever.
4. As the consumers of a web resource point to it by its identity instead of the identity of a server, there could be multiple parties hosting the same content. This means that a node or a computer could simply connect to the network and host content already hosted by another node or computer. This makes sure that even when a server or two go offline, there is at least some server or group of servers that make sure the content is made available to anyone interested in that specific resource. This is kind of similar to load balancing, but in a decentralized manner.

## Short-Term Solution: Connecting the Two Webs

The approach to hosting content on Web 3 is a huge shift, but that doesn't mean we cannot create a bridge between the two webs, which is something I've been doing for a while now.

There are several Web 3 domain providers, and a great one among those that I've invested in is [UnstoppableDomains](https://unstoppabledomains.com). I won't go into details about how good they are, but in general, they allow you to buy and own Web 3 domains for life, without any renewal or administration fee, so you not only save money on yearly renewals but also on blockchain transactions you have to make every time you make changes to your domains. The world of Web 3 is huge, but for the scope of this video, we'll only look at mapping Web 3 domains to some decentralized content, which, in our case, is a simple web page. By the way, this video isn't sponsored by UnstoppableDomains, though now that I mention it, that would've been great.

So, once you own a domain with UnstoppableDomains, when you go under the domain settings, and then the "Website" tab, among a few options you have there, you can also point the domain to an [IPFS](https://ipfs.tech) hash. Here, you can also upload your own HTML page that they can pin for you, and the page I had till this point was as simple as this:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="refresh" content="0;url=https://myterminal.me"/>
    </head>
</html>
```

I realize we haven't talked about what IPFS is, what content hashes are, or even what pinning something means, but for now, just trust me that this web page is hosted by UnstoppableDomains in a decentralized manner, and that is what the domain is being pointed to.

You'll notice that when I run this in a regular web browser, it doesn't get me anywhere, but with this extension installed, we start to see some magic.

So, when you hit the domain in a Web 3 enabled web browser, you get served this page, which then redirects you to Web 2, taking you to my so-called legacy website.

One of the reasons this is clearly a temporary solution is that it doesn't allow us to leverage the full potential of Web 3, which is decentralization.

## A Better Solution: Hosting Directly on Web 3.0

We can either live with the bridge between the two webs or create something that lets us do it the right way. As it usually is with everything with computers and technology in general, we have several ways to achieve what we're looking for, and that is just a handful of things, actually:

1. host a web page in a decentralized way
2. share a static link with our audience so that even when the content updates, they're still able to access the latest version using the same link
3. associate a human-friendly, easy-to-remember URL with our web page

And that's it! So let's get started.

## One of the Many Ways

The following are a few things I've learned that can help you host your content on Web 3, some of which I plan to use in order to expand my presence beyond Web 2.

Please do note that the following sections are based on my personal experiences, and there may be better ways to do things, especially by the time you may be watching this video. In case you know of some, please enlighten me so that I can learn from you and improve my setup.

### 1. Preparing a Web Page to Host

In order to host a web page, you need to create one. For this exercise, we're creating a simple HTML page with a famous quote from our very favorite [Commander Shepard](https://masseffect.fandom.com/wiki/Commander_Shepard), along with some embedded styles and a script. The process to achieve what we need till the end of this step is pretty standard, and you're free to use tools of your choice. I used [Emacs](https://www.gnu.org/software/emacs) to create this page because that's how I roll. So yes, create a web page by any means you find fit, and proceed to the next steps.

### 2. Installing IPFS

In order to host our web page, we'll use IPFS, which stands for InterPlanetary File System. It is a decentralized, peer-to-peer protocol for storing and sharing files using content addressing, where data is identified by its unique cryptographic hash rather than its location. We'll worry about more details in the upcoming sections, but for now, all we need is to be able to access IPFS commands in a terminal.

For the purpose of this exercise, we'll install [Kubo](https://github.com/ipfs/kubo), which is a command-line tool that helps you work with IPFS from the terminal.

If you use [macOS](https://www.apple.com/os/macos), it could be as simple as

```bash
brew install ipfs
```

If you use [Linux](https://www.linux.org), I'm sure there's a way to install it through the package manager for your distribution. As I run [Void Linux](https://voidlinux.org), it's available through XBPS, so I install it with

```bash
sudo xbps-install -S kubo
```

If you use [Windows](https://www.microsoft.com/en-us/windows), well, I'm sure you'll find help somewhere, so good luck! Once you do get the tools on Windows, the rest of the steps are ideally supposed to be the same.

After you install Kubo, you have the commands needed to work with IPFS from the terminal. You can also check that with

```bash
which ipfs
```

or

```bash
ipfs --version
```

Using either of these commands, if at all, there is an output on the console, which means that we have IPFS tools installed on the machine.

The only thing that's left is an init, which is as simple as:

```bash
ipfs init
```

It does a lot of things, like creating a peer identity (through which you can be identified on IPFS), creating an empty data store (where we would soon be hosting data), and much more.

### 3. Adding Content To IPFS

The first step for hosting any content on IPFS is to get it on IPFS. It is as simple as:

```bash
ipfs add -r ./web-dir
```

This command adds all content except hidden files in the current directory, recursively, into IPFS. As soon as your content gets on IPFS, it can be accessed using the content hashes that you see. However, it may not be there for long and may be garbage-collected, but before we fix that, there's one more step we need to perform, which is to run the daemon:

```bash
ipfs daemon
```

You may also run the daemon through a system service, so you won't have to keep a terminal window open for the rest of the process.

With the daemon running, we should be able to retrieve the content using either our local gateway:

```bash
https://127.0.0.1:8080/ipfs/<CID>
```

or using one of the remote gateways:

```bash
https://ipfs.io/ipfs/<CID>
```

You will notice that the content is accessible through the local gateway as soon as you add it, while it takes a little time to be available through the remote gateway.

### 4. Hosting Content

To ensure the data persists on IPFS, it must be pinned.

```bash
ipfs pin add <CID>
```

Pinning is always recursive, so we do not need to explicitly specify that we'd like to pin everything underneath that tree of data. Once done, the data is reliably available at least till the node you're pinning it from is connected to the network. We can either do this manually by making sure our node is running and is always connected to the internet, or use a pinning service like [Pinata](https://pinata.cloud) so that they take care of it for us, but that is a topic for another future video.

There's one clear problem with what we've done till this point, and that comes from the way IPFS works. Remember how I mentioned that this is all content-based addressing, so the content hash that the data is accessible through is, by the name, a hash of all the content itself, and that means that every time the content changes, so will the hash. If you were to share the hash with your consumers and then, at a later point, make changes to the data, they will still end up seeing the old, outdated content.

### 5. Getting a Fixed Address

IPFS also provides a way to get a static identity behind which you can host your content, such that even though the content itself changes, the address through which the consumers access it doesn't change.

[IPNS](https://docs.ipfs.tech/concepts/ipns) (InterPlanetary Name System) is a naming system built on IPFS that allows you to create mutable pointers to immutable content. It uses cryptographic keys to generate unique, updatable names for linking to IPFS content, enabling dynamic updates to stored data.

```bash
ipfs name publish /ipfs/<CID>
```

Running this command returns an IPNS address, which is a static link that can be shared with our audience and used to view the web page.

Now, every time there is an update to our web page, all we need to do is add the content again, pin it, and then publish it to IPNS.

```bash
ipfs add -r ./web-dir
ipfs pin add <CID>
ipns name publish /ipfs/<CID>
```

### 6. Maintaining Across Computers

So till now, all that we've hosted on IPFS has been published as `<peer-id>`, so that's associated with our node. However, if you work with multiple computers as I do, this wouldn't work. I need to be able to make changes to this mini-website from any of my computers, and potentially also host it from more than one of them. For this reason, we can use a specific IPNS key that we can use across our multiple nodes, such that the identity of the data would remain the same regardless of the node we update this from, and multiple nodes would be able to host it on IPFS.

In order to create an IPNS key, we can run a command as simple as:

```bash
ipfs key gen --type=rsa --size=2048 <name-of-the-key>
```

What this will do is generate a new ID against which you can publish your content. On my node, you'll notice a new entry under `~/.ipfs/keystore/`. If we were to specify the key to be used while publishing our content with IPNS, there's one extra parameter we need to specify in the command:

```bash
ipfs name publish --key=<name-of-the-key> /ipfs/<CID>
```

To use this key to publish content from other nodes or computers, all that we need to do is transfer the key to the other node, and then repeat the steps around adding, pinning, and publishing.

Till this point, we've achieved two out of the three primary goals we talked about at the start of this video. All that's left is a human-friendly URL, and we'll take care of it in the next step.

### 7: Hosting My Website on a UD Domain

So previously, I had my Web 3 domain pointed to the IPFS hash of a tiny HTML page that only redirected to a Web 2 website. Now, let's point the domain to this decentralized web page that we have created.

To perform the upgrade, we'll have to undo what we had there earlier, and that involves hitting the "Remove" button here in the "Website" tab. This takes a couple of minutes, and once it gets saved, we're ready to start over. Now, if we'd like to go simple, we could simply paste the IPFS hash of the web page we created, but as we know, that will need an update through this web interface every single time there's an update to the web page. If only we could figure out a way to associate this domain with an IPNS hash instead of an IPFS hash, then we could keep making updates to our web page from the CLI interface on any of the machines where this IPNS key is present.

Now, the ability of being able to associate an IPNS hash with a domain is something that needs to be supported by the provider, and as UnstoppableDomains only allows us to work with IPFS hashes, a workaround that I've come to know is to create an HTML redirect similar to the way we did last time, but with a small change. Instead of redirecting the user to a Web 2 domain, we'd redirect them to an IPNS address. This does add an additional hop between the first URL hit in the browser and the final page we intend to show the user, but until we figure out a better way to do the association, at least there's something! Please let me know in the comments if you know a better way to achieve this.

Once the changes have been applied, hitting the Web 3 domain in a Web 3 enabled web browser takes us to our newly developed decentralized web page.

## Limitations of the Current Setup

Even though it seems we achieved all that we aimed for, there are several clear gaps in this implementation:

1. We only have a single static page and are limited to what we can show the user within that page itself. Now you can do a lot within a single page if you were to leverage browser history API through either a mainstream frontend library like [React.js](https://react.dev), a framework like [Angular](https://angular.dev), or through custom [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), but I'd still call that a limitation as apart from several implications of such a design that relies heavily on in-browser scripts, you need to have JavaScript enabled on the web browser. I know it isn't a problem in most environments, but there still are entities like web crawlers used by search engines that aren't capable of running JavaScript at least in the same capacity as your Google Chrome, Mozilla Firefox, or [Microsoft Edge](https://www.microsoft.com/en-us/edge) does.
2. We still need to figure out how to accept URL parameters from the user and show them what they asked for. Take, for example, this web page, which contains information about what the user intends to see. In our setup, you're always taken to the root of the website, which turns out to be a web page that does not respect query parameters supplied in the original URL.
3. There's too much redirection between the first URL hit and the final page that ends up showing in the browser. Ideally, I would've preferred a direct response to a web request, the way it happens in most Web 2 implementations. Look how I can hit my Web 2 website right from a command-line terminal, involving not a single redirect.

These are only some of the limitations that I've seen so far, and there could certainly be many more.

## Conclusion

So that was some of what I've been exploring on and off in the last couple of years that I hope will be helpful to you as well, to prepare for the future. Please share with me what more you have done in the world of Web 3, as I'm very curious about how things shift for not only web developers but also the web in general.
