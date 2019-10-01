const bot_base = require('./utils/bot-base')

const token = process.argv[2];

const bot = bot_base(token);

bot.on('message', message =>
{
    let args = message.content.split(" ");
    const desiremsg = 
        args.find((arg) => 
        (arg.toLowerCase().charAt(0) === 'i') && 
        (arg.toLowerCase().charAt(1) === 'm') && 
        (arg.toLowerCase().charAt(2) === 'p') && 
        (arg.toLowerCase().charAt(3) === 'r'))&& 
        args.find((arg) =>
        (arg.toLowerCase().charAt(0) === 'p') && 
        (arg.toLowerCase().charAt(1) === 'a') && 
        (arg.toLowerCase().charAt(2) === 's') && 
        (arg.toLowerCase().charAt(3) === 'q'));
        
    if (desiremsg)
        message.channel.send('Sem papel', {tts: true});
}); 