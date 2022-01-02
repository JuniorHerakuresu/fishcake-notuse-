import Client from "../../../fishcake.js";
import FishCake from "../../structures/Client.js";
import ClientEvent from "../../utils/ClientEvent.js";
export default new ClientEvent(`ready`, async function (Fishcake) {
    // Dont cache anything//
    Client.guilds.limit = 0;
    Client.users.limit = 0;

    // let commands = Array.from(Client.commands.values());
    // let slashcommands = commands.find(cmd => cmd.slashCommand === true)
    // Client.guilds.limit = 0;



    // // console.log(Client.eventNames())
    // // console.log(Client.guilds)
    // setInterval(() => {
    //     console.log(Client.guilds.size)
    //     const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
    //     arr.reverse();
    //     const used = process.memoryUsage().heapUsed / 1024 / 1024;
    //     console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
    // }, 5000);
    // console.log(slashcommands)

})