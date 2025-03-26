import pkg from 'pg';
const { Pool } = pkg;
import { sendMessage } from "./telegram.js";

const pool = new Pool({
  host: "143.110.246.194",
  port: 5454,
  user: "postgres",
  password: "postgres",
  database: "KLN",
});

async function handleKLN(chatId, username) {
  try {
    const res = await pool.query("SELECT * FROM users WHERE chat_id = $1", [chatId]);

    if (res.rows.length === 0) {
      // Человека нет — добавим
      await pool.query(
        "INSERT INTO users (chat_id, username, registered_at) VALUES ($1, $2, NOW())",
        [chatId, username || null]
      );
      return sendMessage(chatId, "Вы зарегистрированы в KLN ✅");
    } else {
      return sendMessage(chatId, "Yes, I will tag you.");
    }
  } catch (error) {
    console.error("Ошибка при работе с базой:", error);
    return sendMessage(chatId, "Произошла ошибка при проверке.");
  }
}

export { handleKLN};