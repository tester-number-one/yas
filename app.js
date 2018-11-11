const Discord = require('discord.js');
const bot = new Discord.Client();
const configs = ('./config.json'); //extra configuration
const responses = require('./responses.json'); //responses for specific commands
const prefix = ","; //bot's default prefix
bot.on("ready", () => { 
  console.log('I am ready! :D'); 
}); 
bot.on("message", (message) => { 
  const fruit_response = responses.fruit[Math.floor(Math.random() * responses.fruit.length)];
  const args = message.content.slice((process.env.PREFIX).length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (!(message.author.id === process.env.MASTER_ID)) return; //checks messages only with my id 
  switch(command)
  {
    case "boop":
      message.channel.send(fruit_response);
      break;
    case "arithmetics":
      var a = parseInt(args[0]);
      var op = args[1];
      var b = parseInt(args[2]);
      var res;
      switch(op)
      {
        case '+':
          res = a+b;
          break;
        case '-':
          res = a-b;
          break;
        case '*':
          res = a*b;
          break;
        case '/':
          res = a/b;
          break;
        default:
          res = "Invalid operand, try again";
      }
      message.channel.send(res);
      break;
  }
});
bot.login(process.env.BOT_TOKEN);
