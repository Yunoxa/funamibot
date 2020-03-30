const Discord = require('discord.js');
module.exports = {
	name: 'sentence',
	cooldown: 2,
    description: 'Sends a random sentence.',
    aliases: ['s'],
	execute(message) {

        let firstword = [`Spoony`, `${message.author}`, `borgar`, `ball`, `cbt`, `armpit`, `pot`, `hentai`, `semen`, `osu!`
        , `cowboy`, `feet`, `Yui`, `boob`, `cock`, `nude`, `juice`, `coke`, `life`, `cum`, `Yuru Yuri`, `Akari`, `Chinatsu`, `Kyoko`, `Chocomint`, `jail`, `winter`, `song`, `vein`
        , `morning`, `doctor`, `cow`, `ladybug`, `society`, `corn`, `war`, `dog`, `toad`, `pail`, `meat`, `pie`, `snail`, `${message.author}'s face` , `insect`, `anal`, `Chitose`
        , `Ayano`, `Chizuru`, `Mirakurun`, `Ganbo`, `Sakurako`, `Himawari`, `Rivarun`]
        let secondword = [`s are`, `s look`, `s smell`, `s sound`, `s appear to be rather`, `s make me feel`, `s are the epitome of`
        , `s are quite interesting. Whenever I look at them they seem`];
        let thirdword = [`sexy`, `awesome`, `epic`, `magnificent`, `similar to semen`, `crazy`, `uptight`, `random`, `insane`, `unsanitary`, `quick`, `just like cum`
        , `fat`, `greasy`, `poopy`, `delicious`, `exquisite`, `gay`, `extravagant`, `like rum raisin`, `weird`, `inconsistent`, `funny`, `hot`, `cocky`, `elderly`
        , `chunky`, `short`, `tiny`, `weak`, `puny`, `thin`]
       
        let firstwordoutput = firstword[Math.floor(Math.random()*firstword.length)];
        let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)];    
        let thirdwordoutput = thirdword[Math.floor(Math.random()*thirdword.length)];
        let msgContent


        let adjective1 = ['dumb', 'ugly']
        let adjective = adjective1[Math.floor(Math.random()*adjective1.length)];


        let altSentence = [' is', ` is rather`, ` is quite`, ` is totally`, ` is definitely`, ` is so ${adjective} I always laugh uncontrollably in a way that is`];


        //MEGA IF STATEMENT!!
        if (firstwordoutput.includes(`Spoony`)) {
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
            
            msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
            message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Mirakurun`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`osu!`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`cum`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`hentai`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`${message.author}'s face`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Yuru Yuri`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`${message.author}`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`anal`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        
        } else if (firstwordoutput.includes(`life`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        
        }else if (firstwordoutput.includes(`feet`)){
            let secondword = secondword[` are quite`, ` make me`]
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Akari`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Yui`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Kyoko`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`cbt`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Chinatsu`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Ayano`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Chitose`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Sakurako`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
        
        msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
        message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Himawari`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
            msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
            message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Ganbo`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
            msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
            message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Rivarun`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
            msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
            message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`Chizuru`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
            msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
            message.channel.send (msgContent)
        } else if (firstwordoutput.includes(`semen`)){
            let secondword = altSentence
            let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)]; 
            msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
            message.channel.send (msgContent)
        }   else {
            msgContent = `${firstwordoutput}${secondwordoutput} ${thirdwordoutput}`
            message.channel.send (msgContent)
        }

        
        
       
        


	},
};