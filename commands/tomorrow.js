const Discord = require('discord.js');
module.exports = {
	name: 'tomorrow',
	description: 'If I can do it tomorrow, I wont do it today!',
	execute(message) {
		
		const tomorrowEmbed = new Discord.RichEmbed()
            .attachFiles([`./Images/Procrastination.gif`])
            .setImage(`attachment://Procrastination.gif`)
            .setTimestamp()
            .setFooter("Words to live by");
		
		
		
		message.channel.send(tomorrowEmbed);
	},
};