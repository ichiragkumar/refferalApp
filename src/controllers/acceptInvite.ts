
import { Request, Response } from "express";
import { pubSubClient } from "../service/pubsubClient";

const { TOPIC_NAME } = process.env;
if(!TOPIC_NAME){    
    throw new Error("TOPIC_NAME is required");
}



export const acceptInvite = async (req: Request, res: Response):Promise<any> => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    const buggerMessageBuffer = Buffer.from(
        JSON.stringify({ email, status: "ACCEPTED" })
    );

    await pubSubClient.topic(TOPIC_NAME).publishMessage({ data: buggerMessageBuffer });

    return res.json({ message: `Invite accepted for ${email}` });
};