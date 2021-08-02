# What I Learned Writing My First Book

> This article is a transcript of a video that you can watch by clicking the thumbnail below. Certain statements may not make sense in text form, and watching the video instead is recommended.

[![https://i.ytimg.com/vi/jZ__rihvcMQ/hq720.jpg](https://i.ytimg.com/vi/jZ__rihvcMQ/hq720.jpg)](https://youtu.be/jZ__rihvcMQ)

This video isn't about [Linux](https://www.linux.org), [Emacs](https://www.gnu.org/software/emacs), or any other scary stuff that you'll otherwise hear me talk about. Instead, if you've read the title of this video, it's about [a book](https://play.google.com/store/books/details?id=hOU3EAAAQBAJ) that I wrote recently. Well actually, it does include all that as well, but that's just me, right? So let's continue with the video.

## Why I wrote a book

If you know me, I'm a little too much into [computer programming](https://myterminal.me/diary/20200309/5-plus-ways-how-Rust-makes-you-a-better-programmer), not just as a means of living, but also as a hobby. In fact, I've been doing this since way before I [started my carrier](https://myterminal.me/diary/20191207/My-first-decade-as-a-professional-software-developer) as a software developer, even back when I was studying Electronics Engineering, just out of my passion for computers.

After all these years of writing computer code professionally, and doing it outside of work too, I've developed a strong impression among people. Being good at the art, and more so being so-called "passionate" about programming is something I find too generic. I mean I'm sure that if you'd ask this question to anyone who's been in the software industry, they'll tell you that they love writing code, but I wish I was known for other things too. I definitely can't stop doing it now, not at work because it helps me pay my bills, but also outside of work as it would be like leaving a part of me behind.

Fun fact, I tried it once back in 2010 close to the start of my professional career, and needless to say, it didn't go well. Having said that, I've been looking to explore [other forms of art](https://www.reddit.com/r/photography/comments/kswiqf/i_discovered_a_neat_trick_while_trying_to_achieve) recently, the only problem is, everything that I do brings me back to my QWERTY keyboard in some way or the other. Not that it's anything bad, I guess you can't run away from yourself.

I don't need to specifically mention this, but I'm not the best with languages, not with computer programming languages, and definitely not with human languages, so writing a book isn't something that I'd expect from myself either. However, after being criticized for my detailed emails at work, long messages over text chat, and ultra-long internet posts, I thought rather than bringing concision to my written communication, how about I let my thoughts flow for once, and publish it in form of a book? I might as well learn something new, which would be great!

## What it is like to write a book, at least as I see

Writing a book is a huge commitment, so I definitely needed to prepare for it. I had the following high-level unknown parameters that I had to learn about and decide on:

1. **The Topic**

 For a book to exist, there needs to be a topic. I can bore people verbally as long as they want to be about countless topics during random encounters, be it at work, at a store, or on the street, but this time, I was looking for something that would make sense to a wider audience, at least for my first book. I chose [To-Dos and task-planning](https://myterminal.me/diary/20191227/How-I-manage-to-meet-most-of-my-deadlines-and-still-keep-myself-%27mostly%27-motivated) as a topic as I thought it would work for me and almost all of us can relate to it in some way or the other.

2. **Tools**

 Obviously, I wasn't going to write a book in [Microsoft Word](https://www.microsoft.com/en-us/microsoft-365/word) or other proprietary word processors. I imagined I'd use a plain text format to write my book such that I could edit it effortlessly using a tool of my choice and maintain the "source" easily (possibly inside a [GIT](https://en.wikipedia.org/wiki/Git) repository). Also, I didn't want to lose myself in formatting the text in a tool that would not promise me the same results across machines. So I chose [org](https://orgmode.org) as a convenient format that let me achieve all that I was expecting with minimal burden. I'll talk more about this in just a moment. Also, the markup language wasn't all, there were many more tools involved. We'll talk about the tools too in the next section.

3. **Form**

 I could either publish a printed book (which would have involved much more planning and execution) or publish it as an eBook (that wouldn't have been any easier given [the number of formats available](https://kdp.amazon.com/en_US/help/topic/G200634390) today). I went with an eBook (at least to start with) as that made more sense for the topic and the audience I was planning to target anyway. Not to mention the super-small number of pages, printing which would have been inefficient.

4. **Platform**

 Though I could just host the book on [my personal website](https://myterminal.me) or share it over [social media](https://www.linkedin.com), that wouldn't have been the best way to make it available for my audience. I found [several publishing platforms](https://selfpublishing.com/self-publishing-companies) that let you publish your book for free or at a small fee. We'll talk about the platform in detail in the upcoming sections.

## My tools

All the tools I used to write, test, and publish the book were free and open-source.

1. **GNU Emacs**

 To write my book, I needed a text editor, for which (if you didn't guess yet), I chose [GNU Emacs](https://www.gnu.org/software/emacs). There's no way I would've used anything else, given my comfort with the tool for [almost a decade now](https://github.com/myTerminal/presentations/tree/master/technical/why-use-emacs-in-2017#why-use-emacs-in-2017). Let's not go in [that direction](https://github.com/myTerminal/world-of-emacs#world-of-emacs), or else this video will go on forever.

2. **Org with LaTeX**

 There were tons of [plain text markup languages](https://en.wikipedia.org/wiki/Lightweight_markup_language#Comparison_of_language_features) including [Markdown](https://daringfireball.net/projects/markdown) which has been gaining more popularity recently. As a matter of fact, I did use Markdown in [several of my open-source projects](https://slide-gazer.teamfluxion.com), as I find it very featureful and easy to use too. However, the more appropriate option for this kind of use-case would've been [LaTeX](https://en.wikipedia.org/wiki/LaTeX). For my own reasons (that I'll soon talk about), I went with org.

3. **Pandoc**

 My org file needed to be converted into a distributable format, for which I used [pandoc](https://pandoc.org). Pandoc is a multi-tool that can do a lot, but for me, it let me convert my LaTeX embedded org file into a PDF for distribution.

4. **GNU Make**

 Running a pandoc command manually on every change I made to my source felt very tiring, and being as lazy as I am, I created a [Makefile](https://www.gnu.org/software/make/manual/make.html) to watch for changes to the source and compile it into a PDF on every file save.

5. **Gimp**

 To edit the cover image along with the other graphics in the book, I used [Gimp](https://www.gimp.org).

6. **Mozilla Firefox**

 The output PDF could be viewed in any document viewer that supports PDF format, but I used [Mozilla Firefox](https://www.mozilla.org/en-US/firefox) to keep checking the preview all along the process. I know that I could've used GNU Emacs to preview the PDF too, but I wanted to keep it simple and use an interface that was as close as possible to the end-users of the book.

7. **Operating System**

 As it goes without saying all the tools were running on Linux, which at that point happened to be [Debian 11 Bullseye](https://www.debian.org/releases/bullseye).

## The steps I took

Let's talk about the steps I took at a high level.

1. **Fix a topic and overview**

 Although the exact title of the book kept changing during the entire period I worked on it even on the day I published it, the main idea behind the topic was set to To-Dos and personal life management.

2. **Set up a toolchain**

 I created [the toolchain](https://github.com/myTerminal/books/blob/main/01_how_to_stay_sane_with_your_tasks/Makefile) (as I mentioned before) to build the book on every file save. All that was now left was to work on the book itself.

3. **Establish the basic layout**

 As I started working on the actual book, I looked around on the web for [standard layouts](https://blog.reedsy.com/parts-of-a-book) for non-fictional books and I set one up for myself. This included what pages will be a part of the front matter, and the back matter, how the table of contents will look like, and then finally what the actual chapters would appear as.

4. **Create front matter**

 Before starting on the main matter, I filled up the front matter of the book that included the sections like "Copyright", "About The Author", "Dedication", "Acknowledgments", "Epigraph", etc.

5. **Complete initial draft**

 Once all the front matter was taken care of, at least for the first revision, I spent the next few days writing the actual content.

6. **Complete back matter**

 The back matter of the book, which included "Glossary", "Bibliography" and "Index" could not be worked on before I completed the main matter. Once I had that in place, I filled in the gaps for the back matter too.

7. **Design book cover**

 After the content was complete and also after several self-reviews, I went on to design the book cover. The main cover image, just like [the other images](https://pixabay.com/accounts/collections/952523) in the book were taken from PixBay. I grabbed the cover graphic and created the complete cover page using Gimp, as I did mention earlier.

8. **Get ISBN?**

 I learned that when publishing a book over the mainstream publishing platforms, one may choose to not purchase an [ISBN](https://www.isbn.org) for their book and instead use the one provided by the platform itself. This is exactly what I did and it saved me some money too as an ISBN can cost anywhere between a few dollars to a thousand, and I was not planning to spend for this.

9. **Publish on appropriate platforms**

 Though I had originally planned to publish the book over [Amazon Kindle](https://www.amazon.com/Kindle-eBooks) and [Draft2Digital](https://draft2digital.com), I had to change the plan towards the end of the project. I learned that the former recently [stopped accepting PDFs directly](https://kdp.amazon.com/en_US/help/topic/G200634390) and instead converts an uploaded PDF into a flowing format, which is something I didn't want to be done to my book. The latter [didn't even accept PDFs](https://draft2digital.com/faq) and instead asked for a `.docx`, which was a huge let-down. Thanks to [my brother](https://github.com/tfKamran) for his idea to try it at [Google Play](https://play.google.com/store/books), I could finally publish it on at least one platform. They did take several days to review my account, not the book itself, and silently made it live without a single notification to me as the author. At least they let me publish it, so I can't complain.

10. **Get a universal link**

 For now, the book resides on just a single platform, but I may do it on other platforms too. I wished I could share a single link with my audience and they could choose to access it from the platforms that the book was available on. Luckily, Draft2Digital has a service named [Books2Read](https://books2read.com), and it did let me generate [a universal link](https://books2read.com/how-to-stay-sane-with-your-tasks) for the book. Now my audience can consume the book from any of the platforms it's available at, by using this universal link.

11. **Share with people**

 I shared the book on the same platforms I share my [YouTube videos](https://www.youtube.com/myTerminal) on, and it got some attention at least during the first couple of weeks. I also received some feedback that I'll work on for my next book.

## A few choices I made

These are a few choices I had to make:

1. **Used `org` for `LaTeX`**

 I found LaTeX to be a little too verbose for my taste. As I was going to use Emacs anyway, so I chose org instead, with some embedded LaTeX inside to achieve very similar results without the extra headache of learning a new language.

2. **Used `pandoc` instead of `texlive`**

 I found that I could either use [texlive](https://tug.org/texlive) to convert my book into a PDF or use a multitool like Pandoc. At least for my case, I found that pandoc provided better results, so I ended up choosing it over texlive.

## A summary of what I learned in the process

Finally, the following is a summary of what I learned from the exercise:

1. **Writing a book** is easier than we think and so is publishing it, especially if your book is only a few tens of pages and you self-publish it for free.

2. There are plenty of options for **self-publishing** so you don't have to work with a publisher, which saves a lot of time and effort if you don't want to go that big.

3. There is also a variety of **formats** one can publish in, so you don't have to always create PDFs.

4. If you choose to put a price on your books, **royalties** that are paid to you differ between providers, and often these providers have multiple plans too.

5. You don't need to learn **LaTeX** to use it, even if you desire similar results. Languages like org let you embed LaTeX keywords when required while you can focus on your text for the rest of the content.

## A few realizations

I did realize a couple of things:

1. **Writing a book is different than an email**

 Writing detailed internet posts and ultra-long emails is much different than writing a book. More text needs more reviews, and especially if you're the only one reviewing your content, it gets boring each successive time you do it.

2. **Language matters**

 English still isn't my first language, so my text might not appear formal. But having said that, I don't know another language that I'm better at either. If you plan to write a book in a language that you're not the best in, expect similar results. Getting help from professionals can be an option, if you're willing to spend money, that is.

## The book is now open-source

A couple of days after I published the book, I made it [open-source](https://github.com/myTerminal/books/tree/main/01_how_to_stay_sane_with_your_tasks). It now resides as a part of a [GitHub project](https://github.com/myTerminal/books) where you can build it yourself from the source.

One of the first things you'll notice in the source file would be that I did cut through a lot of corners to get things to look like I wanted them to look. Yes, I'm not a hundred percent proud of it, but at least it got the job done for this time.

## Further from here

I'll keep an eye out for reviews and will hold back writing my second book (spoilers) until I feel that I've learned enough to do it a better way for the next one, especially without the compromises I had to make this time.

This is where you come in. Your reviews will help me in several ways: positive reviews will do the obvious good and negative reviews will help me see my shortcomings and learn from them. Though the book is pretty short, in case you think you don't have the time to read it in full, your honest review will be highly appreciated.

## Outro

That's all that I have for this video, so let me know if you liked it through either the Like/Unlike buttons or through your thoughts, feedback (preferably constructive), and ideas in the comments. You may also subscribe to the channel to show me your support and encourage me to make more of such videos. Thanks for watching it till the end, may the maker watch over you, see you in the next video!
