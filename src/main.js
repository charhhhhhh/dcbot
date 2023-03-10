import { Client, Events, GatewayIntentBits } from 'discord.js'
import { loadCommands } from '@/core/loader'
import vel from '@/core/vue'
//import vel from '../src/core/vue'
import dotenv from 'dotenv'
loadCommands()
dotenv.config()
vel()
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(process.env.TOKEN);