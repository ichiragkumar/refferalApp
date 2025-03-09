import { pubSubClient } from "./pubsubClient";
import dotenv from "dotenv";
dotenv.config();


const {TOPIC_NAME,  SUBSCRIPTION_NAME } = process.env;


if( !TOPIC_NAME || !SUBSCRIPTION_NAME){
    throw new Error("TOPIC_NAME , SUBSCRIPTION_NAME are required");
}

export const subscriber = async () =>{
    const topic = pubSubClient.topic(TOPIC_NAME);
    const subscription = topic.subscription(SUBSCRIPTION_NAME);

    subscription.on("message", (message) => {
        console.log(`Message id: ${message.id}`);
        console.log(`Received message: ${message.data.toString()}`)
        

        const data = JSON.parse(message.data.toString());
        if(data.status === 'PENDING'){
            console.log("Pending user");
            return;
        }else if (data.status === 'ACCEPTED'){
            console.log("Accepted user");
            return;
        }
        else if (data.status === 'REJECTED'){
            console.log("Rejected user");
            return;
        }

        else if (data.status === 'CONFIRMED'){
            console.log("Confirmed user");
            return;
        }

        message.ack()



    });

    subscription.on('error', error => {
        console.error('Error receiving message:', error);
    });
    console.log(`Listening for messages on '${SUBSCRIPTION_NAME}'...`);

}


subscriber();