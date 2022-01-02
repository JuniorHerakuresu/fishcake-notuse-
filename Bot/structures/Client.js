import { Client } from "eris";
import './Message.js';
import { loadCommands, loadEvents } from '../utils/CommandHandler.js';
import { DisabledEvents, ColorLogs } from "../utils/Constants.js";

import Database from "../../Database/mongodb.js";

class FishCake extends Client {
    constructor(token) {
        super(token)
        this.token = token;
        this.client = new Client(this.token);
        this.options.defaultImageFormat = 'webp'
        this.options.messageLimit = 0;
        this.options.disableEvents = DisabledEvents;
    }
    //* Launch the bot, connect in database and makes everything work//
    async launch() {
        await this.connect()
        this.once(`ready`, () => console.log(`Client is connected.`));
        await this.loadCommands()
        this.once('ready', () => console.log(`Commands are loaded.`));
        await this.loadListeners()
        this.once('ready', () => console.log(`Listeners are loaded.`));
        Database;
        this.once('ready', () => console.log(`Database is connected.`));

    };

    //* Load the events and emit them //
    async loadListeners() {
        const Paths = loadEvents("././Bot/listeners");
        const events = new Map();
        Paths.forEach(async path => {
            let event = await import(`../.` + path);
            if ("default" in event) event = event.default;
            events.set(event.name, event);
            this.on(event.name, event.listener.bind(this.client, this));
        });
    };

    //* Load the commands//
    async loadCommands() {
        const Commands = loadCommands("././Bot/commands");
        const commands = new Map();
        Commands.forEach(async file => {
            let command = await import(`../.` + file)
            if ("default" in command) command = command.default;
            commands.set(command.name, command)
        })
        return this.commands = commands;
    };

    //* Get the rest user//
    async getUser(id) {
        const user = await this.getRESTUser(id).catch(() => null);
        if (user !== null) return user;
        else return null;
    };

};

export default FishCake;