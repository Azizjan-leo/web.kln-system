
// import {axiosInstance} from './axios';

// function sendMessage(messageObj, messageText) {
//     return axiosInstance.get("sendMessage", {
//         params: {
//             chat_id: messageObj.chat.id,
//             text: messageText,
//         },
//     });
// }

// function handleMessage(messageObj) {
//     if (!messageObj || !messageObj.text) return;

//     const messageText = messageObj.text;

//     if (messageText.charAt(0) === "/") {
//         const command = messageText.substr(1);
//         switch (command) {
//             case "start":
//                 return sendMessage(messageObj, "Hi! I'm bot, how can I help you?");
//             default:
//                 return sendMessage(messageObj, "Hi! I don't know this command.");
//         }
//     } else {
//         return sendMessage(messageObj, messageText);
//     }
// }


// module.exports = {handleMessage};


import { axiosInstance } from "./axios.js";

async function sendMessage(chatId, messageText) {
    try {
        const response = await axiosInstance.post("sendMessage", {
            chat_id: chatId,
            text: messageText,
        });
        console.log("Message sent:", response.data);
    } catch (error) {
        console.error("Error sending message:", error.response ? error.response.data : error.message);
    }
}

async function handleMessage(messageObj) {
    if (!messageObj || !messageObj.text) return;

    const messageText = messageObj.text;
    const chatId = messageObj.chat.id;

    if (messageText.startsWith("/")) {
        const command = messageText.slice(1); // убираем "/"
        switch (command) {
            case "start":
                return sendMessage(chatId, "Привет! Я бот, чем могу помочь?");
            case "shop":
                return sendMessage(chatId, "🛍 Перейдите в магазин: https://frontend-dodo-8q1iv8r1v-umars-projects-fa2018ce.vercel.app");
            default:
                return sendMessage(chatId, "Неизвестная команда. Попробуйте /start или /shop.");
        }
    } else {
        return sendMessage(chatId, `Вы написали: "${messageText}"`);
    }
}

export { handleMessage };
