const Discord = require('discord.js');
module.exports = {
    name: 'yuin',
description: `Send a specific image featuring the greatest girl, Yui Funami.`,
usage: '<Number>',
guildOnly: false,
cooldown: 1,
execute(message, number) {

    
   
    if (number > 505) {
        message.channel.send(`Please enter a number below 455`)
    }


    let yuiEmbed = new Discord.RichEmbed() 
    .setTitle(`**Yui Image ${number}**`)
            .attachFiles([`./ImagesYui/${number}.png`])
            .setImage(`attachment://${number}.png`)
            .setTimestamp()
            .setFooter("Awesome specific image of Yui");


    
    message.channel.send (yuiEmbed)
    
    
    
    
    
        
},
};