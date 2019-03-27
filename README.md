# Play Frontend

## Introduction

Welcome to Pay, a front application where you can search for songs by artist, add those songs as favorites, then add those favorites to playlists.

## Production URL

https://bendelonlee.github.io/playFrontend/

## Initial Setup

1. Clone down. From the command line:
```
git clone git@github.com:bendelonlee/playFrontend.git
```
2. From the command line, run `npm install`.

3. Ensure that a backend application is running and sending requests to the address contained in the variable backendAddress. The backend application is found here: https://play-backend.herokuapp.com

## Deploying

Be sure to run `nmp build` before deploying. Can be deployed as a static site to github pages or surge.

## Tech Stack

* [JavaScript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)
* [Express](https://expressjs.com/)

## Known Issues

When a favorite is added, the favorites displayed on the page should be updated without a refresh.
When a favorite is added to the playlist, it should appear on that playlist without a refresh.
There should be steps taken to be sure that favorites are unique in the database.




## How to Contribute

Checkout our waffle board: https://waffle.io/bendelonlee/play_backend

Send a pull request to git@github.com:bendelonlee/playFrontend.git

## Core Contributors

Ben Lee, Anten Skrabec

## Special Thanks

Corey Westerfield (@corywest)
Dione W (@dionew)
