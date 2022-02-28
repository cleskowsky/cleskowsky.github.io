---
layout: post
title:  "How to send email reliably on the internet"
---

This is a work in progress. Sending email reliably isn't an easy thing to do. These are some of my personal notes of things that have worked for me as well as some reference articles from other people who have also spent a lot of time working on this problem.

# Email auth headers

![auth headers example](/assets/images/email_auth_headers_example.png)

* dkim=pass DKIM signature check passed on the receiving esp side
* spf=pass SPF check passed on the receiving esp side
* dmarc=pass (p=NONE sp=NONE dis=NONE)
  * policy=NONE Can be either NONE, QUARANTINE or REJECT. Usually when you turn on dmarc you start in policy mode NONE so you can start collecting reports on how well you are aligned with you message from header, return-path (for spf) and dkim signature header
  * sp=NONE tells the receiving esp whether to apply dmarc policy to subdomains
  * dis=NONE Gmail specific extension (Are others doing it?) saying policy=. was ignored (Happens when mail is forwarded?) [source](http://lists.dmarc.org/pipermail/dmarc-discuss/2013-April/001848.html)

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
    * Domain splitting: It's a good idea to isolate different kinds of email from each other through the use of subdomains. (eg Transactional email vs bulk or marketing email is an easy example to think about)
      * no-reply@mail.company.com (or no-reply@company.com) vs no-reply@marketing.company.com
      * Reputation of email sent at the root domain affects email sent from subdomains. The reverse is not true.
      * Email sent from 1 subdomain doesn't impact the rep of email sent from another subdomain
      * Domains and subdomains must be warmed for sending email (Google and Microsoft offer tools to see a domain's rep from their point of view)
        * Every email service provider will have their own internal way of measuring email domain rep involving multiple factors
        * IPs have rep too but it is thought that since services exist that provide shared pools of ip addresses for use by multiple senders this signal is not as good as it was for ESPs
      * If you split too much you may get to a place where you're not sending enough email in a channel for it to build the rep it needs for email to deliver
* Postfix
* Transactional vs bulk (unsolicited) email
* [Feedback loops](https://www.emailfeedbackloops.com/): Register with email service providers so that you can receive notifications whenever a recipient marks one of your emails as spam. Add these mailboxes to a do-not-email list to protect your email domain / ip rep. The ESPs you're probably particularly worried about not offending are gmail, outlook / hotmail and yahoo

# Gmail

* [Prevent mail being blocked or marked spam](https://support.google.com/mail/answer/81126?hl=en&ref_topic=7279058): Google's guidance to sending email reliably to gmail mailboxes
* [Postmaster tools](https://support.google.com/mail/answer/9981691?hl=en&ref_topic=6259779): Postmaster tools lets you analyze delivery gmail reports for your domain

# Microsoft, outlook, hotmail

* [Guidelines for sending email to hotmail mailboxes](https://sendersupport.olc.protection.outlook.com/pm/policies.aspx)
* [Summarized by returnpath](https://help.returnpath.com/hc/en-us/articles/225097528-Microsoft-Outlook-com-and-Hotmail-deliverability-best-practices)
* [SNDS: Smart Network Data Services (Reputation of sender with Outlook.com)](https://sendersupport.olc.protection.outlook.com/snds/)

# Links

## From the trenches

* [Giving away the secrets of 99.3% email delivery](https://signalvnoise.com/posts/3096-giving-away-the-secrets-of-993-email-delivery)
* [How we send 22000 emails every hour](https://www.jitbit.com/news/email-architecture/)

## Message authentication

* [Dmarcly's ultimate guide to implementing message authentication](https://dmarcly.com/blog/how-to-implement-dmarc-dkim-spf-to-stop-email-spoofing-phishing-the-definitive-guide#a-tale-of-two-from-addresses)

### SPF

* [What is an SPF record?](https://www.dmarcanalyzer.com/spf/spf-record/)

### DKIM

* [DKIM: What is it and why is it important?](https://postmarkapp.com/guides/dkim)
* [DKIM Selectors](https://dmarcly.com/blog/what-is-dkim-selector-and-how-does-it-work-dkim-selector-explained): When you're sending email from multiple delivery providers on a single domain. Eg GSuite and Salesforce both sending email on behalf of leskowky.net
* [DKIM Records Explained](https://docs.sendgrid.com/ui/account-and-settings/dkim-records)

### DMARC

* [What is DMARC and why is it important?](https://mailchimp.com/marketing-glossary/dmarc/)
* [DMARC: What is it and why do you need it?](https://postmarkapp.com/guides/dmarc)
* [How DMARC and a custom Return-Path work together](https://postmarkapp.com/blog/how-dmarc-and-a-custom-return-path-work-together)
* [What if DKIM passes on a message sent from an unfamiliar source?](https://postmarkapp.com/support/article/1089-what-if-dkim-passes-on-a-message-sent-from-an-unfamiliar-source)
* [DMARC reports](https://support.google.com/a/answer/10032472?hl=en)
* From Google
  * [Tutorial: Recommended DMARC rollout](https://support.google.com/a/answer/10032473?hl=en)
  * [Troubleshoot DMARC issues](https://support.google.com/a/answer/10032578?hl=en&ref_topic=2759254)
* [DMARC Monitoring Tools — Comparison Sheet](https://docs.google.com/spreadsheets/d/1qqqh3ivF3w8GmAhEvJoh8NWt2pTy7HvkClTydYE367Q/edit#gid=0)
* [What is DMARC Identifier Alignment](https://dmarcly.com/blog/what-is-dmarc-identifier-alignment-domain-alignment): Describes spf, dkim alignment pretty well me thinks.

## Tools

* [SPF Record Checker](https://www.dmarcanalyzer.com/spf/checker/)

## Using email subdomains

* [When and why to use them from Litmus](https://www.litmus.com/blog/email-subdomains/): Highly level overview of why / how you'd do it with real examples from internet companies actually doing it
