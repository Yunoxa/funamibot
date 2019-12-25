module.exports = {
	name: 'kyodoru',
	description: 'Summons the mighty Kyodoru',
	execute(message, args) {
		message.channel.send ({files: ["./Images/kyodoru.png"]})
	},
};
