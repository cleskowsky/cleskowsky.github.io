---
layout: post
title:  "My Random Notes About Sending Email on the Internet"
---

Sending email is a dark art! You can't say with complete certainty whether an email service provider will accept a message you're trying to send even if you find a "status=sent" in your postfix log.

* DNS
  * Reverse (PTR records)
  * Forward
* SPF
* DKIM
* DMARC
* Reputation
  * IPs
    * IP Warming
  * Domain
* Postfix
* Send rate
* Transactional vs bulk (unsolicited) email
