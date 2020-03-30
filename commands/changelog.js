module.exports = {
	name: 'changelog',
	description: 'Sends a text file which has update information',
	execute(message) {
		message.channel.send ({files: ["./Images/v0.30.png"]})
		message.channel.send ({files: ["ChangeLog.txt"]})
	},
};