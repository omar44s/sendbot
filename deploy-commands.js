const { REST, Routes } = require("discord.js");

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const fs = require("fs");

const commands = [];

const commandFiles = fs
    .readdirSync("./commands")
    .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    commands.push(command.data.toJSON());

}

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {

    try {

        console.log("Deploying Commands...");

        await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {
                body: commands
            }
        );

        console.log("Commands Deployed.");

    } catch (err) {

        console.error(err);

    }

})();