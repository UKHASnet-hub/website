UKHASnet-www
============

This is a website for the UKHASnet Network

## Status

Prototype - All pages load null data, all forms are set to throw errors.

## Structure

* Static HTML pages
* Content loaded dynamically from /api/ scripts by AJAX

### PHP Scripts

* PDO SQL login in /api/sql.php

## ToDo

* Add parsing for packet upload (api/uploadPost.php)
* Add DB to server
* Write the rest of the API scripts to interface with db
* Individual Node Info page with telemetry tables/graphs
* Individual User Info page with list of nodes owned and their status
* Edit Node/Edit User pages

## Wishlist

* User authentication - hopefully not a problem until becomes widespread
* Logtail logging of upload parsing errors
* Node up/down alerts
* Move away from PHP
