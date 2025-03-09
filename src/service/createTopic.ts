import { pubSubClient } from "./pubsubClient";


const { PROJECT_ID ,TOPIC_NAME,  SUBSCRIPTION_NAME } = process.env;

if(!PROJECT_ID || !TOPIC_NAME || !SUBSCRIPTION_NAME){
    throw new Error("PROJECT_ID , TOPIC_NAME , SUBSCRIPTION_NAME are required");
}

export const createTopic = async () =>{
    const topic = pubSubClient.topic(TOPIC_NAME);



    // do not create topic if not exist
    const [topics ] = await pubSubClient.getTopics();
    const existingTopics = topics.map(topic => topic.name);

    if(existingTopics.includes(TOPIC_NAME)){
        console.log("Topic already exist");
        return;
    }

    await topic.create();
    console.log(`Topic ${TOPIC_NAME} created.`);


    // create subscription
    const [subscriptions] = await pubSubClient.getSubscriptions();
    const existingSubscriptions = subscriptions.map(s => s.name.split('/').pop());

    if(existingSubscriptions.includes(SUBSCRIPTION_NAME)){
        console.log("Subscription already exist");
        return;
    }

    await topic.createSubscription(SUBSCRIPTION_NAME);
    console.log(`Subscription ${SUBSCRIPTION_NAME} created.`);
    


}


createTopic();