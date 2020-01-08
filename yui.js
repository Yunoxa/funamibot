number = 112;
module.exports = {
    name: 'yui',
description: `Send an image featuring the greatest girl, Yui Funami. Currently ${number} unique images available.`,
guildOnly: false,
cooldown: 1,
execute(message) {
    
    number = 112,
    imageNumber = Math.floor (Math.random() * number) + 1;
    message.channel.send ({files: ["./ImagesYui/" + imageNumber + ".png"]})
        
},
};
