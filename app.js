const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ","; //bot's default prefix
bot.on("ready", () => { 
  console.log('I am ready! :D'); 
}); 
bot.on("message", (message) => { 
  const args = message.content.slice((process.env.PREFIX).length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (!(message.author.id === process.env.MASTER_ID)) return; //checks messages only with my id 
  switch(command)
  {
    case 'changestatus':
      var stat = args.slice(0).join(" ");
      bot.user.setActivity(stat);
      break;
  }
});
bot.login(process.env.MY_TOKEN);
