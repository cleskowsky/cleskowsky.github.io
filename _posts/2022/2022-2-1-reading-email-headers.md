---
layout: post
title: "Reading email headers"
---

* In Gmail
  * Show original
  * Look for Authentication results header for dkim, spf, dmarc pass / fail status
* Return-path email domain is used for dmarc spf alignment check
* Dkim sig header is used for dmarc dkim alignment check
* Only 1 of spf or dkim alignment needs to pass for dmarc to pass
* mtasv.net is the mailer domain for postmark