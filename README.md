# gta6-countdown

Bot for Stoat.

## Clone the repository
```bash
git clone https://github.com/Emosewaj/gta6-countdown.git
cd gta6-countdown
```

## Install dependencies
```bash
npm install
```

## Configuration
This bot uses a JSON config. Copy the `config.example.json` file as `config.json` and enter your Stoat bot token.

## Run locally
```bash
npm start
# or
node src/index.mjs
```

## Run with pm2
Install pm2 globally and start the bot:

```bash
cd gta6-countdown
npm install -g pm2
pm2 start src/index.mjs --name "gta6-countdown"
```