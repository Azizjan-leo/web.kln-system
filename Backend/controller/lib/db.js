import pkg from 'pg';
const { Pool } = pkg;
import { sendMessage } from "./telegram.js";

const pool = new Pool({
  host: "localhost", //"143.110.246.194",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "kln",
});

async function handleKLN(chatId, username, firstName, lastName) {
  try {
    const res = await pool.query("SELECT * FROM public.users WHERE chat_id = $1", [chatId]);

    if (res.rows.length === 0) {
      // Человека нет — добавим
      await pool.query(
        "INSERT INTO public.users (chat_id, username, first_name, last_name, registered_at) VALUES ($1, $2, $3, $4, NOW())",
        [chatId, username || null, firstName || null, lastName || null]
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