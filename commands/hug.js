module.exports = {
	name: 'hug',
	cooldown: 5,
	description: 'Give someone a hug! (Mention a user or put a name after the command)',
	execute(message) {
        const Discord = require('discord.js');

        number = 1

        var str = `${message}`;
        str = str.replace("~hug", "");

        imageNumber = Math.floor (Math.random() * number) + 1;

        let hugDesc = `${message.author} gave${str} a big hug!`

        let hugEmbed = new Discord.RichEmbed()
       .setTitle(`**Hug!**`)
            .setColor('#ff69b4')                     
            .setTimestamp()
            .attachFiles([`./hugGifs/${imageNumber}.gif`])
            .setImage(`attachment://${imageNumber}.gif`)
            .setDescription(`${hugDesc}`);
            
        
        message.channel.send(hugEmbed)




	},
};