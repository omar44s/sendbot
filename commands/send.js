const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("send")
        .setDescription("إرسال رسالة عن طريق مودال")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {

        const modal = new ModalBuilder()
            .setCustomId("send_modal")
            .setTitle("إرسال رسالة");

        const title = new TextInputBuilder()
            .setCustomId("title")
            .setLabel("عنوان الإمبد")
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const description = new TextInputBuilder()
            .setCustomId("description")
            .setLabel("الوصف")
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true);

        const color = new TextInputBuilder()
            .setCustomId("color")
            .setLabel("لون الإمبد (مثل #ff0000)")
            .setStyle(TextInputStyle.Short)
            .setRequired(false);

        const banner = new TextInputBuilder()
            .setCustomId("banner")
            .setLabel("رابط البنر (اختياري)")
            .setStyle(TextInputStyle.Short)
            .setRequired(false);

        const rows = [
            new ActionRowBuilder().addComponents(title),
            new ActionRowBuilder().addComponents(description),
            new ActionRowBuilder().addComponents(color),
            new ActionRowBuilder().addComponents(banner),
        ];

        modal.addComponents(...rows);

        await interaction.showModal(modal);
    }
};