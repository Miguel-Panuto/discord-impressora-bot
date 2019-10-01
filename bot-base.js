const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = (token) =>
{
    bot.login(token);

    bot.on('ready', () => 
    {
        console.log('This bot is online!');
    });
    return bot;
}