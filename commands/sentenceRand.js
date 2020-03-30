const Discord = require('discord.js');
module.exports = {
	name: 'sentencerand',
	cooldown: 2,
    description: 'Sends a super random sentence.',
    aliases: ['sr'],
	execute(message) {
        let firstword = ["Hi,", "What?", "Lol,", "Why", "Wtf?!", "I", "I'm", "Send", "Kyoko's", "Why's", "Chinatsu's", "Akari's", "Yuru Yuri's", "kick", "Lick", "Be", "Your", "Imma"
        ,"Please"];
        let secondword = ["stinky", "chocomint", "sexy", "you", "gay", "pretty dumb", "kick" , "penis", "butts", "life", "love", "loves", "ur mum's", "are you", "am", "drink"
        , "your", "me", "want", "Funami", "Kyoko", "Chinatsu", "Akari", "can I have your", "murder", "Yuru Yuri", "the", "playing", "my", "cowboy", "osu!", 
        "drunk", "nice", "kind", "awesome", "pot", "commit", "Spoony", "eat my" , "lick my"];
        let thirdword = ["gay", "sexy", "pretty dumb", "stinky", "penis", "butt", "butt juice", "cum", "cum bottle", "life", ":)", "fernet", "coke", "juice", "nudes", "videos", 
        "pics", "cock", "boobs", "Yui", "lol", "Yuru Yuri", "kick", "feet", "cowboy", "mate", "osu!", "semen", "drunk", "hentai", "pot", "armpit", "cbt", "balls", "borgar", "splane"
        , "spoony", "ass", "cucumber", "chocolate", "fun"];
        let question = "?"

        let firstwordoutput = firstword[Math.floor(Math.random()*firstword.length)];
        let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)];    
        let thirdwordoutput = thirdword[Math.floor(Math.random()*thirdword.length)];
        let questionoutput = [(Math.random())];
        
        let msgContent
        if(questionoutput >= 0.5) {
            msgContent = `${firstwordoutput} ${secondwordoutput} ${thirdwordoutput}${question}`
        }  else if(questionoutput <0.5) {
            msgContent = `${firstwordoutput} ${secondwordoutput} ${thirdwordoutput}`
        }
        
        
        message.channel.send (msgContent)

        


	},
};