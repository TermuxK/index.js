const Discord = require('discord.js');
const roblox = require('roblox-js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.content.startsWith('!check')) {
    const username = message.content.split(' ')[1];
    const user = await roblox.getUserFromName(username);
    if (user) {
      const userId = user.Id;
      const avatarUrl = user.ThumbnailUrl;
      message.channel.send(`Username: ${username}\nUser ID: ${userId}\nAvatar URL: ${avatarUrl}`);
    } else {
      message.channel.send('User not found.');
    }
  }
});
