const {Client, Events, GatewayIntentBits} = require('discord.js');

//config do dotenv para conectar bot
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

//importando comando
const fs = require("node:fs");
const path = require("node:path");

const commands = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter();

const client =  new Client({intents: [GatewayIntentBits.Guilds]});

client.once(Event.ClientReady, c => {
    console.log(`Pronto! Login realizado como ${c.user.tag}`)
})

client.login(TOKEN);

