# mc-tg-bot
Minecraft Server Status telegram bot. 
## Features

* Get player count, online players, server version, and name
* Get latency to server (ping from bot to server)

## Startup

Rename `.env.example` to `.env`, replace values of `BOT_TOKEN` and `USER_CHAT_ID`  to yours(If you are willing to use this bot in a group, you need to get your group chatid first).

Additionally, you can preset your MC server address as `MC_SERVER_ADDRESS` in `.env` file.(You can set the address later by calling `/setting`)

### How to create a Telegram chatbot yourself?

Add [Bot Father](https://telegram.me/BotFather) to your contact, use `/newbot` command to create your own bot. You will get your HTTP api token as `BOT_TOKEN` eventually.

![20240101153019](https://raw.githubusercontent.com/flynncao/blog-images/main/img/20240101153019.png)

### How to get my own chatid?

* Fastest way: Add [Get My ID](https://t.me/getmyid_bot) to your contact, use `/start` command and you will get your current chatid as your `USER_CHAT_ID`.

* Conventional way: Visit [Telegram Web](https://web.telegram.org/), open Saved Messages chat window, the number behind `web.telegram.org/a/#` is your user chatid, sometimes it is a negative figure.
(You can also appy this approach to get your group channel chatid, etc.)

## Commands Preset

* `/start` Welcome text
* `/help` Show help text
* `/mc` Show MC server status 
* `/setting` Set MC server address 
* `/about` Show information about the bot

