import { PubSub } from "@google-cloud/pubsub"; 
import path from "path";



console.log(path.join(__dirname, "./service-account.json"),)

const pubSubClient = new PubSub(
    {
        keyFilename: path.join(__dirname, "./service-account.json"),
    }
);


console.log(pubSubClient)