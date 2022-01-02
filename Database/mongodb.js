import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import { ColorLogs } from '../Bot/utils/Constants.js';
dotenv.config();

const database = new MongoClient(process.env.DATABASE_URL);
database.connect();
const db = database.db("test");
const Members = db.collection("members");


class Database {
    async getMembers() {
    }
    async logMember(user) {
        let data = JSON.parse(JSON.stringify(user));
        let object = {
            _id: data.id,
            username: data.username,
            discriminator: data.discriminator,
            avatar: data.avatar,
            createdAt: data.createdAt
        };
        let res = await Members.findOne(object);
        if (res === null) {
            res = await Members.findOne({ _id: data.id });
            if (res !== null) {
                Members.updateOne({ _id: data.id }, {
                    $set: {
                        username: data.username,
                        discriminator: data.discriminator,
                        avatar: data.avatar
                    }
                })
                    .then(() => { return console.log(`${data.id}|${data.username} data are updated in database.`); })
                    .catch(e => { console.error(`there was an error when i tried to log ${data.id} data in database: ${e.name}`) })
            }
            else {
                Members.insertOne(object)
                    .then(() => { return console.log(`${data.id} data are saved in database.`); })
                    .catch(e => { console.error(`there was an error when i tried to log ${data.id} data in database: ${e.name}`) })
            };
        };
    };
};

export default new Database();