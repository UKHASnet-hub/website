UKHASnet-www
============

This is the [ukhas.net](http://www.ukhas.net) website for the UKHASnet Network

## Status

Deployed to [ukhas.net](http://www.ukhas.net)

## Structure

* Static HTML pages
* Content loaded dynamically from /api/ scripts by AJAX

### API

* All dynamic data is loaded from a HTTP Reverse-proxied golang application (ukhasnet-api)

## Wishlist

* User authentication - hopefully not a problem until becomes widespread
* Logtail logging of upload parsing errors
* Node up/down alerts

## Installation

NOTE: This is not intended for local installation and use, it is hosted on github to encourage contribution of improvements from the community.

Only a HTML capable server is required, however for data retrieval and display you will need a working copy of the ukhasnet-api Daemon reverse-proxied behind /api/

## GPL v3, Copyright 2013

* Phil Crump
* Elements from habitat.habhub.org
    * (C) Copyright 2012 Daniel Richman, Daniel Saul; GNU GPL 3
* Bootstrap Templates
