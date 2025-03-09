

import { Request, Response } from "express";
import { pubSubClient } from "../service/pubsubClient";



export const inviteUser = async (req :Request, res :Response):Promise<any> => {
    const { email } =req.body;


    if(!email){
        return res.status(400).send("Email is required");
    }

    const message = Buffer.from(JSON.stringify({ email, status: 'PENDING' }));


    try{
        const { TOPIC_NAME } = process.env;
        if(!TOPIC_NAME){    
            throw new Error("TOPIC_NAME is required");
        }
        await pubSubClient.topic(TOPIC_NAME).publishMessage({ data: message });
        res.json({ success: true, message: `Invite sent to ${email}` });

    }catch(e){
        console.log(e);
        return res.status(500).send("Internal server error");
    }

}