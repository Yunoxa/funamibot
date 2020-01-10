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
			return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
		});

		message.channel.send(avatarList);
	},
};