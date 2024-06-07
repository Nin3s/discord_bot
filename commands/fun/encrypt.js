const {SlashCommandBuilder} = require('discord.js');
const {caesar} = require('./cipher/caesar.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('encrypt')
        .setDescription('encrypt a message')
        .addSubcommand(subcommand =>
            subcommand
                .setName('caesar')
                .setDescription('caesar cipher')
                .addIntegerOption(option =>
                    option.setName('shift')
                        .setDescription('shift by how many letters')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('message')
                    .setDescription('enter the message to be encrypted')
                    .setMaxLength(500)
                    .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('vigenere')
                .setDescription('vigenere cipher')
        ),
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'caesar') {
            const key = interaction.options.getInteger('shift')
            const plaintext = interaction.options.getString('message')
            let message = caesar(key, plaintext)

            await interaction.reply(`Encrypted message with key of ${key}: \n > ${message}`)
        }
    }
}