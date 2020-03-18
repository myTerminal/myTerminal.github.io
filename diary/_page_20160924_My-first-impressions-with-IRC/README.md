# My First Impressions with IRC

*Internet Relay Chat* (IRC) is an application layer protocol that forms a platform to communicate using text. Various networks provide the infrastructure required for IRC to work and the users connect with clients (thin and thick), that are available on almost all platforms (including BlackBerry!). IRC works with channels, where communication mainly occurs in the form of discussion forums, however, you can also have one-to-one chats in the form of private messages and some cases, data-transfer including file-sharing.

*Freenode* is a network, which was formerly known as *Open Projects Network*, and is used to discuss peer-directed software projects.

## Get an IRC client

To use IRC, you need a client. It can be a thin client (web-application running on a web browser) or a thick client (software installed on your device). [https://webchat.freenode.net](https://webchat.freenode.net) is a good thin client that you can use to try IRC over your favorite web-browser.

## IRC Commands

You mostly interact with IRC using slash commands. By the name, the commands here start with a slash `/`, followed by the keyword and then the arguments separated by spaces. An example can be

    /join #linux

## Start with a nickname

To use IRC, you need a nickname, known as a `nick` in IRC terms.

Your nickname is the only means to identify you on IRC and hence must be unique.

You can log onto IRC with any nickname that is not registered, without a password and start using IRC, without even registering your nickname on the network. There is usually no authentication and you can just start with a nickname that you think will be unique and if it isn't your network will inform you about it.

You can change your nickname for the current session by just typing

    /nick shepard

where `shepard` is your new nickname.

However, to access certain features of IRC like joining certain channels that have been restricted to people with a registered nickname (those who have been authenticated for the current session), you will eventually need to register your nickname on the network.

## Register your nickname

Registering a nickname is nothing more than a command. You simply need to send a message to `NickServ` specifying that you intend to register your nickname along with the details like your password and an email address. `NickServ` addresses your requests for commands related to your nickname. You can type

    /msg NickServ REGISTER <password> <email-address>

In the above command, `msg` is the command name, wherein you intend to send a message to the `NickServ` instructing it to register your currently used nickname, supplying a password and your email address. Once the command is executed, you'll be informed that an email has been sent to your email address specifying a command to verify your registration, a step that you need to complete within the next 24 hours to complete the registration. You'll be told to execute a command like the one shown below

    /msg NickServ VERIFY REGISTER shepard sqnwnzupqpnr

After you perform the above step, you have successfully claimed your nickname until it will expire out of being not used for a certain amount of time.

Henceforth, you can identify (authenticate) yourself on IRC by typing the below command

    /msg NickServ IDENTIFY <password>

Once you do that, you'll be identified (authenticated) on IRC for the current session.

Certain IRC clients allow you to 'identify' yourself as soon as you connect to the network by prompting for a password on the login screen. So, you do not need to rush to get yourself authenticated within the first 30 seconds of your session.

## Secure your nickname

Even after you have registered your nickname and have it reserved for yourself, people can use IRC with your nickname. As always, they need to identify themselves entering a password before they can use certain channels are other features reserved for registered users. If you want to prevent such inappropriate use of your nickname, you can instruct the `NickServ` to guard it. Just type

    /msg NickServ SET ENFORCE ON

And you need to do this after you have identified yourself on IRC for the current session.

When you have set the `ENFORCE` flag for your nickname, no one would be allowed to use IRC with your nickname for more than 30 seconds. When one will use your nickname to connect to IRC, they will be provided 30 seconds to identify themselves on the IRC with your nickname, failing to do so will change their nickname to something else for that session.

## IRC basics

While being on IRC, you can do a variety of things but the most common of them would be discussing on a channel or chatting with someone via private messages.

To start a private chat with someone who you know the nickname of, you can just type

    /query <nickname> <message>

The above command will open a new private chat tab to have conversations with the nickname you provided, starting the conversation with the message that you provided. Any text entered in that tab henceforth would be the messages you send to that person.

You can get details about a nickname with the `whois` command as shown below

    /whois <nickname>

Type the above command with a nickname and you will be provided with a few details about the nickname.

## Join channels

You can collaborate with people on IRC using channels. To join a channel, you can just type

    /join #<channel-name>

Once executed, you are included in the channel and you will be shown a list of users already in the channel and most importantly, you'll be able to chat within the channel.

Some channels need your nickname to be registered while some need you to be invited first.

## Create a channel

Before you create a channel, you might need to check if the name is available. You can do that by typing

    /msg ChanServ INFO #<new-channel-name>

If the channel name is already taken, you'll be presented with some basic information about the channel. If it is available, you'll be told that the channel name is not registered.

Creating a channel is as easy as joining one. Before you create a channel, you must know the channel naming conventions. As it turns out, channel names prepended with a single `#` are supposed to be official (or primary) channels. If you are creating an unofficial (topic-based) channel, you need to prepend two `#`s before the channel name. Simply type

    /join ##<new-channel-name>

As soon as you do it, you'll end up on the channel you just created. You might want to register a channel to reserve the channel name for later use.

## Register your channel

To register your channel, you need to first join it. To register a channel you just created, type

    /msg ChanServ REGISTER ##<new-channel-name> <description>

The description is optional though. Once your channel is registered with your 'identified' nickname, you need to be joining the channel with that same nickname at least once in every 30 days, else the channel name will expire. To prevent that, you can set the `GUARD` flag ON to prevent losing your channel. You need to tell the `ChanServ` to never let your channel to be empty even when there is no one in the channel. To do so, type

    /msg ChanServ SET ##<new-channel-name> GUARD ON

## Secure your channel

Now that your channel is guarded, you can set a few flags to lock it down further using the following flags:

- `p` (paranoid): don't show channel membership and don't allow people to request invites
- `r` (block unidentified): allow only registered users to join the channel
- `s` (secret): don't show the channel in the channel lists
- `i` (invite-only): allow only invited users to join the channel

You can set the channel flags with the below command:

    /msg Chanserv SET ##<new-channel-name> MLOCK +prsi

## Inviting others

You can invite others to your channel. For you to be able to invite them, they must have a registered nickname.

    /mode ##<new-channel-name> +I $a:<nickname>

The above command adds nickname `<nickname>` to the channel's invitation list.

You can also grant certain privileges including the `ops` (administrative privileges) to your channel to a person.

    /msg ChanServ flags ##<new-channel-name> <nickname> +voAti

- `v` (voice): Enables use of the voice/devoice commands, allowing the user to send messages in a moderated channel.
- `o` (op): Enables use of the op/deop commands.
- `A` (access list): Enables viewing of channel access lists.
- `t` (topic): Enables use of the topic and topicappend commands.
- `i` (invite): Enables use of the invite and getkey commands.

## References

1. [How to Setup a Secure Private IRC Channel](https://botbot.me/how-to-setup-irc-channel)
2. [Registering a channel on freenode](http://freenode.net/news/registering-a-channel-on-freenode)