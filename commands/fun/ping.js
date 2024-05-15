const { SlashCommandBuilder } = require('discord.js');

// placed in module exports so it can be read by other files, such as command loader/deployment scripts

// need to fetch reply
// https://stackoverflow.com/questions/72842146/discord-js-ping-latency-inside-embed-from-slash-command
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('replies with pong'),
    async execute(interaction) {
        const reply = await interaction.reply({content: 'pinging...', fetchReply: true});
        await interaction.editReply(`pong!!\nWebsocket: ${interaction.client.ws.ping}ms \nClient: ${reply.createdTimestamp - interaction.createdTimestamp}ms\nUptime: ${Math.round(interaction.client.uptime / 60000)} minutes`)
    },
};