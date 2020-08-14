const Discord = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json');
const client = new Discord.Client();
const randomPuppy = require('random-puppy');
const ms = require('ms');
const fs = require('fs')


client.once('ready' , () => {
   console.log('Ready!')
})



client.on("ready", () => {
    client.user.setActivity("Bang Bang Potato", { type: "WATCHING"})
})

client.on('guildMemberAdd', member =>{

      const channel = member.guild.channels.cache.find(channel => channel.name === "general");
      if(!channel) return;

      channel.send(`Welcome to our server ${member}, Please read the rules.`)

});


client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
  }
});



client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(" ");

    switch(args[0]){
        case 'commands':
            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Staff Commands')
            .setThumbnail('https://i.imgur.com/nyRYCuZ.jpg')
            .setDescription('These are the staff commands')
            .addFields(
                  { name: '!ban', value: 'Bans a member from the server' },
                  { name: '!tempmute', value: 'Temp mutes member ' },
                  { name: '!kick', value: 'Kicks a member from the server'},
                  { name: '\u200B', value: 'to be added'},
                  { name: '\u200B', value: 'to be added'},
                  { name: '\u200B', value: 'to be added'},
                  { name: '\u200B', value: 'to be added'},
                  { name: '\u200B', value: 'to be added'}


        )
            message.channel.send(embed);
            break;
    }

})

client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(" ");

    switch(args[0]){
        case 'commands':
            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('User Commands')
            .setThumbnail('https://i.imgur.com/nyRYCuZ.jpg')
            .setDescription('These are the user commands')
            .addFields(
                  { name: 'Commands', value: 'to be added' },
                  { name: '!meme', value: 'This command posts a random meme from the internet' },
                  { name: '!cat', value: 'This comman posts a random picture of a cute cat' },
                  { name: '!dog', value: 'This command posts a random picture of a cute dog'},

        )
            message.channel.send(embed);
            break;
    }

})


client.on('message', message => {


      if(messagse.content.startsWith(''))













client.login(process.env.TOKEN);
