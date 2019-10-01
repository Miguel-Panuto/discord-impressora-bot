const bot_base = require('./bot-base')

const token = process.argv[2];

const bot = bot_base(token);

bot.on('message', message =>
{
    let args = message.content.split(" ");
    const desiremsg = args.find((arg) => 
        (arg.charAt(0) === 'i' || arg.charAt(0) === 'I') && 
        (arg.charAt(1) === 'm' || arg.charAt(1) === 'M') && 
        (arg.charAt(2) === 'p' || arg.charAt(2) === 'P') && 
        (arg.charAt(3) === 'r' || arg.charAt(3) === 'R'));
    if (desiremsg)
        message.channel.send('Sem papel', {tts: true});
}); 