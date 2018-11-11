const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus('Online')
  client.user.setActivity("sleeping (since 8:58pm)",{type: "PLAYING"});
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.NTExMDk2MDc5ODkxMDM4MjE5.DsnTOQ.Jd7MUu6JLh8aVbBE9dBCVEj3qQA);
