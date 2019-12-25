module.exports = {
	name: 'beep',
	cooldown: 5,
	description: 'Beep Boop',
	execute(message, args) {
		message.channel.send('Boop');
	},
};
