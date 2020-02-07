module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'pfp'],
	execute(message) {
		const Discord = require('discord.js');
		if (!message.mentions.users.size) {
			
			const avatarEmbed = new Discord.RichEmbed()
			.setTitle("Your avatar")
			.setImage(message.author.displayAvatarURL);
			return message.channel.send(avatarEmbed);
		}


		const avatarList = message.mentions.users.map(user => {
			const avatarEmbed2 = new Discord.RichEmbed()
			.setTitle("Users avatar")
			.setImage(user.displayAvatarURL);

			
			return message.channel.send(avatarEmbed2)
		});

		message.channel.send(avatarList);
	},
};