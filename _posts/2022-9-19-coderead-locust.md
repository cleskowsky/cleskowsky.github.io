---
layout: post
title:  "Coderead: Locust"
categories: coderead
---

* [Github](https://github.com/locustio/locust?ck_subscriber_id=185275687)
* Load testing tool written in Python

* Simple makefile
* Uses vagrant to create a local vm for testing
* Uses flask for a web admin ui
  * TIL flask has extensions for cors, basicauth!
  * eg Extension naming convention flask-basicauth
* locust/web.py has the flask webapp
  * Very nicely factored
  * Not an SPA. Templating language used (jinja2?) with server side rendering (SSR). I guess you can still build apps this way! It saves a bunch of complexity setting up build tools for an asset pipeline if the framework you're using doesn't give you that for free which flask does not I guess
* Bumped into type hinting today again. It's been awhile since I've read python code so it took a few minutes to get myself oriented :)
  * Interesting that code docs appear after symbols ... :/

```python
class WebUI:
    """
    Sets up and runs a Flask web app that can start and stop load tests using the
    :attr:`environment.runner <locust.env.Environment.runner>` as well as show the load test statistics
    in :attr:`environment.stats <locust.env.Environment.stats>`
    """

    app: Optional[Flask] = None
    """
    Reference to the :class:`flask.Flask` app. Can be used to add additional web routes and customize
    the Flask app in other various ways. Example::
        from flask import request
        @web_ui.app.route("/my_custom_route")
        def my_custom_route():
            return "your IP is: %s" % request.remote_addr
    """

    greenlet: Optional[gevent.Greenlet] = None
    """
    Greenlet of the running web server
    """
    
    ...
```