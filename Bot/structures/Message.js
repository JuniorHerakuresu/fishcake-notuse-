import { Message } from "eris";
Object.defineProperty(Message.prototype, `guild`, {
    get: function guild() {
        return this.channel.guild;
    }
});

// Object.defineProperty(Message.prototype, `getMember`, {
//     get: async function getMember() {
//         if (!this.channel.guild.members.has(this.author.id)) return this.getRESTGuildMember(this.channel.guild.id, memberId).catch(() => null);
//         const m = this.channel.guild.members.get(this.author.id) ? this.channel.guild.members.get(this.author.id) : await this.getRESTGuildMember(this.channel.guild.id, this.author.id).catch(() => null);
//         if (m === null) return null;
//         else {
//             return {
//                 id: m.id,
//                 bot: m.bot,
//                 username: m.username,
//                 discriminator: m.discriminator,
//                 avatar: m.avatar,
//                 avatarURL: m.avatarURL,
//                 nickname: m.nick,
//                 tag: `${m.username}#${m.discriminator}`,
//                 mention: `<@!${m.id}>`,
//                 roles: m.roles,
//                 permissions: m.permissions,
//                 staff: ["manageMessages"].every((p) => m.permissions.has(p)),
//                 artstaff: m.roles.includes("759969532558180392"),
//                 artist: m.roles.includes("489572511298617345"),
//                 vip: m.roles.includes("602566804371406858"),
//                 joinedAt: m.joinedAt,
//                 createdAt: m.createdAt
//             }
//         }
//     }
// });