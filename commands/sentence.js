module.exports = {
	name: 'sentence',
	cooldown: 2,
	description: 'Sends a random sentence.',
	execute(message) {
        let firstword = ["Hi,", "What?", "Lol,", "Why", "Wtf?!", "Why is", "I love"];
        let secondword = ["did you just", "you are", "you must be", "where is", "where is my", "what?", "why", "lol", "stinky", "chocomint", "sexy", "you", "gay", "pretty dumb", "penis", 
        "butts", "butt juice", "cum", "cum bottles", "life", "I love", "ur mums", "ur mum is", "ur mum is a", "are you"];
        let thirdword = ["gay", "sexy", "pretty dumb", "stinky", "penis", "butts", "butt juice", "cum", "cum bottle", "life", ":)"];
        let question = "?"

        let firstwordoutput = firstword[Math.floor(Math.random()*firstword.length)];
        let secondwordoutput = secondword[Math.floor(Math.random()*secondword.length)];    
        let thirdwordoutput = thirdword[Math.floor(Math.random()*thirdword.length)];
        let questionoutput = [(Math.random())];
        
        if(questionoutput >= 0.5) {
            message.channel.send(`${firstwordoutput} ${secondwordoutput} ${thirdwordoutput}${question}`)
        }  else if(questionoutput <0.5) {
            message.channel.send(`${firstwordoutput} ${secondwordoutput} ${thirdwordoutput}`)
        }
        
        

        


	},
};