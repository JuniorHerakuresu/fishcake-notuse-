import Database from "../../../Database/mongodb.js";
import Client from "../../../fishcake.js";
import ClientEvent from "../../utils/ClientEvent.js";
export default new ClientEvent(`messageCreate`, async function (Fishcake, msg) {

    if (!msg.author.bot) {
        Database.logMember(msg.author) // saves the member or updates if the member changed data
    }

});