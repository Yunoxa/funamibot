module.exports = {
	name: 'beep',
	cooldown: 5,
	description: 'Beep Boop',
	execute(message) {
		message.channel.send('Boop');
	},
};
