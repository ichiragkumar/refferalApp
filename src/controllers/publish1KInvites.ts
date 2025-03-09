
import { pubSubClient } from "../service/pubsubClient";


const { TOPIC_NAME } = process.env;
if(!TOPIC_NAME){    
 throw new Error("TOPIC_NAME is required");
}


const publishInvites = async () => {
    const topic = pubSubClient.topic(TOPIC_NAME);
    for (let i = 0; i < 1000; i++) {
        const data = {
            email: `user${i}@example.com`,
            status: "PENDING",
        };
        const messageBuffer = Buffer.from(JSON.stringify(data));
        await topic.publishMessage({ data: messageBuffer });

    }


};


export const publist1kInvites = async () => {
    await publishInvites();
};
publishInvites();
