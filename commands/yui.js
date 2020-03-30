number = 505;
const Discord = require('discord.js');
module.exports = {
    name: 'yui',
description: `Send an image featuring the greatest girl, Yui Funami. Currently ${number} unique images available.`,
guildOnly: false,
cooldown: 1,
execute(message) {
       
    imageNumber = Math.floor (Math.random() * number) + 1;

    let yuiEmbed = new Discord.RichEmbed()
    .setTitle(`**Yui Image ${imageNumber}**`)
            .attachFiles([`./ImagesYui/${imageNumber}.png`])
            .setImage(`attachment://${imageNumber}.png`)
            .setTimestamp()
            .setFooter("Awesome image of Yui Funami");

    message.channel.send (yuiEmbed)

  
},
};