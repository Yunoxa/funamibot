const Discord = require('discord.js');
module.exports = {
name: 'eh',
description: `Sends the quote, "eh?" from Yui Funami`,
guildOnly: false,
cooldown: 1,
execute(message) {
   

    
    let quote = "Eh?"

    let yuiquoteEmbed = new Discord.RichEmbed()
            .setTitle("**Eh?**")
            .attachFiles([`./ImagesYui/289.png`])
            .setThumbnail(`attachment://289.png`)
            .setDescription(`"${quote}"`)
            .setTimestamp()
            .setFooter("One of Yui's greatest quotes");

			
			message.channel.send(yuiquoteEmbed)
		
},
};