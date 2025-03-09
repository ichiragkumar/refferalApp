
import dotenv from "dotenv";
dotenv.config();


import express from "express";
import router from "./routes/inviteUser";

const app = express();
const PORT = process.env.PORT || 4001;



app.use(express.json());


app.use("/api", router)





app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });

