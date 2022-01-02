import FishCake from './Bot/structures/Client.js';
import dotenv from 'dotenv'
dotenv.config();
const Client = new FishCake(process.env.DISCORD_TOKEN);
Client.launch();

export default Client;
