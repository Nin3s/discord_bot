const { SlashCommandBuilder } = require('discord.js');

// placed in module exports so it can be read by other files, such as command loader/deployment scripts
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('replies with pong'),
    async execute(interaction) {
        await interaction.reply('pong!!');
    },
};