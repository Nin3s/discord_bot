const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('show an outcome with 8ball')
        .addStringOption(option => option.setName('question').setDescription('ask a question').setRequired(true)),
    async execute(interaction) {
        const responses = ['It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes - definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes.',
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        "Don't count on it.",
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Very doubtful.']

        const res = responses[Math.round(Math.random() * responses.length)]

        await interaction.reply({
            content: ':8ball: ' + res
        })
    }
}