---
layout: post
title:  "My Random Notes About Sending Email on the Internet"
---

Sending email is a dark art! You can't say with complete certainty whether an email service provider will accept a message you're trying to send even if you find a "status=sent" in your postfix log.

* DNS
  * Reverse (PTR "pointer" records): A ptr record must be setup mapping an ip address to the email sending domain (hence the "reverse" dns part since dns usually takes a domain and returns 1 or more ip addresses). For AWS and Azure I can set this up myself but less progressive hosting providers may need a phone call and a special request
    * <some vm ip> -> mail.leskowsky.net (PTR record)
  * Forward: The email sending domain should have a dns "A" record setup pointing at the vm running postfix (or other mail transport agent (mta))
    * mail.leskowsky.net -> <some vm ip> (A record)
* SPF
* DKIM
* DMARC
* Reputation
  * IPs
    * Warming
  * Domain
* Postfix
* Send rate
* Transactional vs bulk (unsolicited) email

# Links

* [Giving away the secrets of 99.3% email delivery](https://signalvnoise.com/posts/3096-giving-away-the-secrets-of-993-email-delivery)
