module.exports = {
	name: 'kyodoru',
	description: 'Summons the mighty Kyodoru',
	execute(message) {
		message.channel.send ({files: ["./Images/kyodoru.png"]})
	},
};