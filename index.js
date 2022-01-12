require("dotenv").config();
const Discord = require("discord.js");

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
}); // new client for bot

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// testing message replies
client.on("messageCreate", (ms) => {
  if (ms.content == "ping") {
    ms.reply("pong");
  }
});
// getting tagged person's info to add to db and add their coin(tips) properly
client.on("messageCreate", (msg) => {
  const tagged = Array.from(msg.mentions.users.values());
  //console.log(msg.author.username + "#" + msg.author.discriminator);
  console.log(tagged[0].username + "#" + tagged[0].discriminator);
});

let usersList = [];

client.login(process.env.CLIENT_TOKEN);
