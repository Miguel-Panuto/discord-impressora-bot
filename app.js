const bot_base = require('./utils/bot-base')

const token = process.env.TOKEN;

const bot = bot_base(token);


bot.on('message', message => {
    const args = message.content.split(" ");

    const pasquaMessage = () => args.find((arg) => (arg.toLowerCase().includes('impr'))) && message.author.discriminator === '4671';

    const desiremsg = () => args.find((arg) => (arg.toLowerCase().includes('impr'))) && args.find((arg) => (arg.toLowerCase().includes('pasq')));

    if (desiremsg() || pasquaMessage())
        message.channel.send('Sem papel', { tts: true });
}); 