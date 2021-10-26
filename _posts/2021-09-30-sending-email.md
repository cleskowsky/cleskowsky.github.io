---
layout: post
title:  "How to send email reliably on the internet"
---

This is a work in progress. Sending email reliably isn't an easy thing to do. These are some of my personal notes of things that have worked for me as well as some reference articles from other people who have also spent a lot of time working on this problem.

* DNS
  * Sending email
    * Reverse (PTR "pointer" records): A ptr record must be setup mapping an ip address to the email sending domain (hence the "reverse" dns part since dns usually takes a domain and returns 1 or more ip addresses). For AWS and Azure I can set this up myself but less progressive hosting providers may need a phone call and a special request
      * <some vm ip> -> mail.leskowsky.net (PTR record)
    * Forward: The email sending domain should have a dns "A" record setup pointing at the vm running postfix (or other mail transport agent (mta))
      * mail.leskowsky.net -> <some vm ip> (A record)
    * SPF
    * DKIM
    * DMARC
  * Receiving email
    * MX
* Reputation
  * IP
    * Warming
  * Domain
* Postfix
* Transactional vs bulk (unsolicited) email
* [Feedback loops](https://www.emailfeedbackloops.com/): Register with email service providers so that you can receive notifications whenever a recipient marks one of your emails as spam. Add these mailboxes to a do-not-email list to protect your email domain / ip rep. The ESPs you're probably particularly worried about not offending are gmail, outlook / hotmail and yahoo

# Links

## Companies sending lots of email

* [Giving away the secrets of 99.3% email delivery](https://signalvnoise.com/posts/3096-giving-away-the-secrets-of-993-email-delivery)
* [How we send 22000 emails every hour](https://www.jitbit.com/news/email-architecture/)

## Technical reference articles
* [What is an SPF record?](https://www.dmarcanalyzer.com/spf/spf-record/)
* [DKIM: What is it and why is it important?](https://postmarkapp.com/guides/dkim)
* [What is DMARC and why is it important?](https://mailchimp.com/marketing-glossary/dmarc/)
* [DKIM Selectors](https://dmarcly.com/blog/what-is-dkim-selector-and-how-does-it-work-dkim-selector-explained): When you're sending email from multiple delivery providers on a single domain. Eg GSuite and Salesforce both sending email on behalf of leskowky.net

## Tools

* [SPF Record Checker](https://www.dmarcanalyzer.com/spf/checker/)
