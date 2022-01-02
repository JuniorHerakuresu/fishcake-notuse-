import { Guild } from "eris";
import FishCake from "./Client";
export default class Member extends Message {

    // async getMember(guildId, memberId) {
    //     if (!this.guilds.has(guildId)) return this.getRESTGuildMember(guildId, memberId).catch(() => null);
    //     const g = this.guilds.get(guildId);
    //     const m = g.members.get(memberId) ? g.members.get(memberId) : await this.getRESTGuildMember(guildId, memberId).catch(() => null);
    //     if (m === null) return null;
    //     else {
    //         return {
    //             id: m.id,
    //             bot: m.bot,
    //             username: m.username,
    //             discriminator: m.discriminator,
    //             avatar: m.avatar,
    //             avatarURL: m.avatarURL,
    //             nickname: m.nick,
    //             tag: `${m.username}#${m.discriminator}`,
    //             mention: `<@!${m.id}>`,
    //             roles: m.roles,
    //             permissions: m.permissions,
    //             staff: ["manageMessages"].every((p) => m.permissions.has(p)),
    //             artstaff: m.roles.includes("759969532558180392"),
    //             artist: m.roles.includes("489572511298617345"),
    //             vip: m.roles.includes("602566804371406858"),
    //             joinedAt: m.joinedAt,
    //             createdAt: m.createdAt
    //         }
    //     }
    // }
}
