module.exports = {
	name: 'yuruyuri',
    cooldown: 5,
    aliases: ['yryr', 'yryrgif'],
    description: 'Posts a random Yuru Yuri gif',
    
	execute(message) {
        var GphApiClient = require('giphy-js-sdk-core')
        giphy = GphApiClient("YWzsIKTD6O52dxOaIMkB655uQujbuKY7")
        giphy.search('gifs', {"q": "Yuru Yuri"})
		
			
		 .then((response) => {
		         var totalResponses = response.data.length
				 var responseIndex = Math.floor((Math.random() *10) +1) % totalResponses;
				 var responseFinal = response.data[responseIndex];

				 message.channel.send({
					   files: [responseFinal.images.fixed_height.url]
					})

				})

					
			}
	}
