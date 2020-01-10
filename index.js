const fs = require('fs');
const Discord = require('discord.js');


const cooldowns = new Discord.Collection();

const client = new Discord.Client();
client.commands = new Discord.Collection();


//Gets an array of all file names in the commands folder. Filter keeps out non .js files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//Puts 'ready!' in the console if it runs successfully
client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('Try ~help for commands')
});


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

//Checks if a command has been issued
	const command = client.commands.get(commandName)
	|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	//Tells user if they need to provide arguments for the command
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
	}

	return message.channel.send(reply);
}

//Checks if cooldowns collection has command set in it, if not it's added in
if (!cooldowns.has(command.name)) {
	cooldowns.set(command.name, new Discord.Collection());
}

//Three variables created. 1) Gets current time. 2) Gets collection for the command. 3) Gets cooldown amount (Will default to 3 if none specified) Then it is converted to milliseconds
const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 3) * 1000;

//Checks if timestamps collection has author id in it yet
if (timestamps.has(message.author.id)) {
	//since timestamps collection has author id now, it's taken and summed up with the cooldownAmount variable in order to get the correct expiration timestamp.
	const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

// If the command is not ready for use yet it tells the user how much longer is left. Author id should be deleted from timestamps after expiration.
	if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
	}
}
//Sets author id with current timestamp and sets a timeout to automatically delete it after the cooldown period has passed
timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

//Executes that command
try {
	command.execute(message, args);

//Catch gives an error message if something goes wrong
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
    
}); 


//logs in
client.login(process.env.BOT_TOKEN);
