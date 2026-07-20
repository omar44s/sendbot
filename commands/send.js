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
        .setDescription("إرسال Embed عن طريق Modal"),

    async execute(interaction) {

        const modal = new ModalBuilder()
            .setCustomId("send_modal")
            .setTitle("إرسال رسالة");

        const title = new TextInputBuilder()
            .setCustomId("title")
            .setLabel("عنوان الرسالة")
            .setPlaceholder("مثال: قوانين السيرفر")
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const description = new TextInputBuilder()
            .setCustomId("description")
            .setLabel("وصف الرسالة")
            .setPlaceholder("اكتب الوصف هنا...")
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true);

        const color = new TextInputBuilder()
            .setCustomId("color")
            .setLabel("لون الـ Embed (#5865F2)")
            .setPlaceholder("#5865F2")
            .setStyle(TextInputStyle.Short)
            .setRequired(false);

        const banner = new TextInputBuilder()
            .setCustomId("banner")
            .setLabel("رابط الصورة أو البنر")
            .setPlaceholder("https://example.com/image.png")
            .setStyle(TextInputStyle.Short)
            .setRequired(false);

        modal.addComponents(
            new ActionRowBuilder().addComponents(title),
            new ActionRowBuilder().addComponents(description),
            new ActionRowBuilder().addComponents(color),
            new ActionRowBuilder().addComponents(banner)
        );

        await interaction.showModal(modal);

    }
};