import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "kln",
  password: "postgres",
});

const newUser = {
  chat_id: 4151531,
  username: 'hellobot',
  last_name: 'breev',
  first_name: 'kichere',
};

(async () => {
  try {
    const insertInto = `
      INSERT INTO public.users (chat_id, username, first_name, last_name, registered_at)
      VALUES ($1, $2, $3, $4, NOW())
      RETURNING *;
    `;

    const res = await pool.query(insertInto, [
      newUser.chat_id,
      newUser.username,
      newUser.first_name,
      newUser.last_name
    ]);

    console.log("✅ Пользователь добавлен:");
    console.table(res.rows);
  } catch (err) {
    console.error("❌ Ошибка при добавлении пользователя:");
    console.error(err);
  } finally {
    await pool.end();
    process.exit(0);
  }
})();
