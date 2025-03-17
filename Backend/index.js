
import express from "express";
import { handleMessage } from "./controller/lib/telegram.js";


const PORT = 4050;

const app = express();
app.use(express.json());

app.post("*", async (req, res) => {
    console.log("Incoming POST request:", req.body);

    if (req.body.message) {
        await handleMessage(req.body.message);
    }

    res.send("OK");
});

app.get("/", (req, res) => {
    res.send("This is a Telegram bot server");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
