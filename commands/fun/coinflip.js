const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coinflip')
        .setDescription('flips a coin'),
    async execute(interation) {
        const responses = ['heads', 'tails']
        await interation.reply({
            content: 'flipping coin...',
            fetchReply: true
        });
        setTimeout(() => {
            interation.editReply(`landed ` + responses[Math.round(Math.random() * 1)]);
        }, 3000);
    }
}