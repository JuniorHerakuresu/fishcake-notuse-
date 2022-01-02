import ClientEvent from "../../utils/ClientEvent.js";
import { ColorLogs } from "../../utils/Constants.js";
export default new ClientEvent(`ready`, async function (FishCake) {
    // Dont cache anything//
    FishCake.guilds.limit = 0;
    FishCake.users.limit = 0;

    //Check ram usage every 1 hour//
    setInterval(() => { console.log(ColorLogs.FgRed, `The bot uses ${Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100} MB`, ColorLogs.Reset) }, 600000)

})
