
import { PubSub } from "@google-cloud/pubsub"; 
import path from "path";



export const pubSubClient = new PubSub(
    {
        keyFilename: path.join(__dirname, "../../service-account.json")
    }
);





