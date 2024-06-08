const {SlashCommandBuilder} = require('discord.js');
const {caesarDecrypt} = require('./cipher/caesar.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('decrypt')
        .setDescription('decrypt a message')
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
                    .setDescription('enter the message to be decrypted')
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
            const cipher = interaction.options.getString('message')
            let message = caesarDecrypt(key, cipher)

            await interaction.reply(`**Decrypted Message:**\n > ${message}`)
        }
    }
}