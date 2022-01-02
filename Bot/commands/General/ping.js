import Client from "../../../fishcake.js";
import Command from "../../utils/Command.js";

export default new Command(`ping`, async function (interaction) {
    const ping = Client.shards.get(0).latency;
    interaction.createMessage(`The ping is ${ping}ms`)
})
    .setPermissions(['manageMessages', 'administrator'])
    .setCooldown(3000)
    .slashCommand(true)