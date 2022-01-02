import Client from "../../../fishcake.js";
import ClientEvent from "../../utils/ClientEvent.js";
export default new ClientEvent(`interactionCreate`, async function (client, interaction) {

    const command = await Client.commands.get(interaction.data.name)
    if (command) return command.command.call(client, interaction);

})