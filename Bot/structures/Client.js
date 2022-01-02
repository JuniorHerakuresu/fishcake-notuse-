import { Client } from "eris";
import './Message.js';
import { loadCommands, loadEvents } from '../utils/CommandHandler.js';
import { DisabledEvents, ColorLogs } from "../utils/Constants.js";
import Fishcake from '../../fishcake.js'

import Database from "../../Database/mongodb.js";

class FishCake extends Client {
    constructor(token) {
        super(token)
        this.token = token;
        this.client = new Client(this.token);
        this.options.defaultImageFormat = 'webp'
        this.options.messageLimit = 0;
        this.options.restMode = true;
        this.options.disableEvents = DisabledEvents;
    };
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
            this.on(event.name, event.listener.bind(this.client, Fishcake));
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
    }; //add more later//

    //* Get the member from the guild//
    async getMember(guildId, memberId) {
        if (!this.guilds.has(guildId)) return this.getRESTGuildMember(guildId, memberId).catch(() => null);
        const g = this.guilds.get(guildId);
        const m = g.members.get(memberId) ? g.members.get(memberId) : await this.getRESTGuildMember(guildId, memberId).catch(() => null);
        if (m === null) return null;
        else {
            return {
                id: m.id,
                bot: m.bot,
                username: m.username,
                discriminator: m.discriminator,
                avatar: m.avatar,
                avatarURL: m.avatarURL,
                nickname: m.nick,
                tag: `${m.username}#${m.discriminator}`,
                mention: `<@!${m.id}>`,
                roles: m.roles,
                permissions: m.permissions,
                staff: ["manageMessages"].every((p) => m.permissions.has(p)),
                artstaff: m.roles.includes("759969532558180392"),
                artist: m.roles.includes("489572511298617345"),
                vip: m.roles.includes("602566804371406858"),
                joinedAt: m.joinedAt,
                createdAt: m.createdAt
            };
        };
    }; //it will change later on//

};

export default FishCake;