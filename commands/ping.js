const {SlashCommandBuilder} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Responde PONG"),

    async execute(interaction){
    await interaction.reply("PONG");
}
}

