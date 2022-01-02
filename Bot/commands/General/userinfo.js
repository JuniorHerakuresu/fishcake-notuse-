import Command from "../../utils/Command.js";
import Client from "../../../fishcake.js";
import EmbedBuilder from '../../utils/EmbedBuilder.js'
export default new Command(`userinfo`, async function (interaction) {
    Client.getDMChannel(interaction.member.user.id).then(dm => dm.createMessage(" "))
    let ID;
    if (!interaction.data.options) ID = interaction.member.id;
    else ID = interaction.data.options[0].value || interaction.data.options[1].value || interaction.user.id
    const User = await Client.getUser(ID);
    if (!User) return interaction.createMessage({ flags: 64, content: "I can't find this user. Make sure you put the right ID" });
    const Member = await Client.getMember(interaction.channel.guild.id, User.id);
    const Embed = new EmbedBuilder()
        .setAuthor(User.username + `#` + User.discriminator, `https://cdn.discordapp.com/avatars/${User.id}/${User.avatar}.webp?size=80`)
        .setTimestamp()
        .setDescription(`**Information about the user:**\n\n> ID: ${User.id}\n > Username: ${User.username}\n> Discriminator: ${User.discriminator}\n> Avatar: [Click here to get the avatar](https://cdn.discordapp.com/avatars/${User.id}/${User.avatar}.webp?size=80)\n> Is the user in the server: ${Member ? `yes` : `no`}`)
        .setThumbnail(`https://cdn.discordapp.com/avatars/${User.id}/${User.avatar}.webp?size=80`)
        .setColor("#00343")
    if (Member) {
        Embed.addFields([
            { name: `Roles`, value: `${Member.roles.length >= 1 ? Member.roles.map(r => `<@&${r}>`).join(' | ') : "none"}` }
        ])
    }
    return interaction.createMessage({ flags: 64, embeds: [Embed] });


})
    .setPermissions(['manageMessages', 'administrator'])
    .setCooldown(3000)
    .slashCommand(true)