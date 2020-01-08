number = 114;
module.exports = {
    name: 'yui',
description: `Send an image featuring the greatest girl, Yui Funami. Currently ${number} unique images available.`,
guildOnly: false,
cooldown: 1,
execute(message) {
       
    imageNumber = Math.floor (Math.random() * number) + 1;
    message.channel.send ({files: ["./ImagesYui/" + imageNumber + ".png"]})
        
},
};
