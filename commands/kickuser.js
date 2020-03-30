module.exports = {
	name: 'kickuser',
	description: 'Kicks a user. (For real tho)',
    guildOnly: true,
    args: true,
    usage: '<user>',
	execute(message) {
var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient("YWzsIKTD6O52dxOaIMkB655uQujbuKY7")

		if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
			if (!message.mentions.users.size) {
				return message.reply('you need to tag a user in order to kick them!');
			}
	
			
			let member = message.mentions.members.first();
			member.kick().then((member) => {
				giphy.search('gifs', {"q": "Yuru Yuri"})
				.then((response) => {
					var totalResponses = response.data.length
					var responseIndex = Math.floor((Math.random() *10) +1) % totalResponses;
					var responseFinal = response.data[responseIndex];

					message.channel.send("Lol, " + member.displayName + " has been kicked!",  {
						files: [responseFinal.images.fixed_height.url]
					})

				}).catch(() => {
					message.channel.send('Grr.. Error!')
				})

					
			})
	
		}
	
		
	},
};