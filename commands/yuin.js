module.exports = {
    name: 'yuin',
description: `Send a specific image featuring the greatest girl, Yui Funami.`,
usage: '<Number>',
guildOnly: false,
cooldown: 1,
execute(message, number) {
       
    if (number > 399) {
        message.channel.send(`Please enter a number below 399`)
    }
    
    message.channel.send (`Yui number : ${number}`, {files: ["./ImagesYui/" + number + ".png"]})
    
        
},
};