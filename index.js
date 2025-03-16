// import express from 'express';
// // import {handler} from './controller/index.js'
// const PORT = 4050;

// const app = express();
// app.use(express.json());
// app.post("*", async (req, res) => {
//     console.log("Incoming POST request:", req.body);
//     // await handler(req);
//     res.send("Hello post!");
// });

// app.get("*", async (req, res) => {
//     res.send("Hello get");
// });

// // app.get('*', async (req, res) => {
// //     res.send (await handler(req))
// //     ("Hello get");
// // });

// app.listen(PORT, function (err) {
//     if (err) console.log("Error:", err);
//     console.log(`Server is running on port ${PORT}`);
// });

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
