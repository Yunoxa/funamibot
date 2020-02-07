module.exports = {
	name: 'changelog',
	description: 'Sends a text file which has update information',
	execute(message) {
		message.channel.send ({files: ["./Images/v0.15.png"]})
		message.channel.send ({files: ["ChangeLog.txt"]})
	},
};