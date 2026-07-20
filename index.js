require("dotenv").config();

const { Client, GatewayIntentBits, Collection } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

client.commands = new Collection();

require("./handlers/commands")(client);
require("./handlers/events")(client);

client.login(process.env.TOKEN);