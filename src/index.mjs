// Node 21 quirk, WebSocket is not in the global namespace lmao
import WebSocket from "ws";
global.WebSocket = WebSocket;

import { default as config } from "./../config.json" with { type: "json" };
import * as functions from "./functions.js";

import * as Stoat from "stoat.js";

const StoatClient = new Stoat.Client();

StoatClient.on("ready", () => {
    functions.log(`Logged in as ${StoatClient.user.username}`);
});

StoatClient.on("messageCreate", async message => {
    if (message.content === "/gta6") {
        functions.log(`${message.author.username}: /gta6`);
        let daysToGta6 = Math.ceil((new Date(config.gta6ReleaseDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
        await message.reply(`Grand Theft Auto 6 releases in ${daysToGta6} days!`);
    }
});

StoatClient.on("serverCreate", server => {
    functions.log(`Joined server: ${server.name}`);
});

StoatClient.loginBot(config.stoatBotToken).catch(error => {
    functions.error("Failed to log in:");
    functions.error(error);
});