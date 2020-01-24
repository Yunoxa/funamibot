module.exports = {
    name: 'yuin',
description: `Send a specific image featuring the greatest girl, Yui Funami.`,
usage: '<Number>',
guildOnly: false,
cooldown: 1,
execute(message, number) {
       
    
    
    message.channel.send (`Yui number : ${number}`, {files: ["./ImagesYui/" + number + ".png"]})
    
        
},
};