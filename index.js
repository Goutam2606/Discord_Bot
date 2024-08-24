require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client(
    {
        intents: [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent]
    });

const token = process.env.TOKEN;
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

});
client.on('messageCreate', (msg) => {
    console.log(msg);
    if (msg.content === 'Hello') {
        msg.reply(`Hello ${msg.author.username}`);
    } else if (msg.content === 'How are you ?') {
        msg.reply(`I am Fine ${msg.author.username}`);
        msg.reply(`What's about you ?`);
    } else if (msg.content === "Ping") {
        msg.reply("Pong !");
        msg.reply("Hahahahahahahaaa :) ");
    }
});

client.login(token);