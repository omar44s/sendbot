const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("send")
        .setDescription("اختبار"),

    async execute(interaction) {
        await interaction.reply({
            content: "البوت شغال ✅",
            ephemeral: true
        });
    }
};