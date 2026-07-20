const {
    SlashCommandBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("send")
        .setDescription("إرسال رسالة"),

    async execute(interaction) {

        const modal = new ModalBuilder()
            .setCustomId("send_modal")
            .setTitle("إرسال رسالة");

        const title = new TextInputBuilder()
            .setCustomId("title")
            .setLabel("العنوان")
            .setStyle(TextInputStyle.Short);

        const description = new TextInputBuilder()
            .setCustomId("description")
            .setLabel("الوصف")
            .setStyle(TextInputStyle.Paragraph);

        const color = new TextInputBuilder()
            .setCustomId("color")
            .setLabel("لون Embed")
            .setRequired(false)
            .setStyle(TextInputStyle.Short);

        const banner = new TextInputBuilder()
            .setCustomId("banner")
            .setLabel("رابط البنر")
            .setRequired(false)
            .setStyle(TextInputStyle.Short);

        modal.addComponents(
            new ActionRowBuilder().addComponents(title),
            new ActionRowBuilder().addComponents(description),
            new ActionRowBuilder().addComponents(color),
            new ActionRowBuilder().addComponents(banner)
        );

        await interaction.showModal(modal);
    }
};