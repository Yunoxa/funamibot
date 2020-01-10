module.exports = {
	name: 'changelog',
	description: 'Sends a text file which has update information',
	execute(message) {
		message.channel.send ({files: ["ChangeLog.txt"]})
	},
};