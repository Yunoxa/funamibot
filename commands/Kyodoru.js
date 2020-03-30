const Discord = require('discord.js');
module.exports = {
	name: 'kyodoru',
	description: 'Summons the mighty Kyodoru',
	execute(message) {

		const kyodoruEmbed = new Discord.RichEmbed()
			.setTitle("Kyodoru has been summoned!")
		    .attachFiles([`./Images/kyodoru.png`])
            .setImage(`attachment://kyodoru.png`)
            .setTimestamp()
            .setFooter("Kyodoru!");
		
		
		
		message.channel.send(kyodoruEmbed);
		
	},
};