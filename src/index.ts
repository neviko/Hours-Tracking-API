import { app } from "./app";
import { pool } from "./db/db";

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
  try {
    await pool.query(
      "CREATE TABLE IF NOT EXISTS tracking( id SERIAL PRIMARY KEY, start_ts TIMESTAMP, end_ts TIMESTAMP, user_id VARCHAR)"
    );
    console.log("table tracking created successfully");
  } catch (e) {
    console.error(`Error while creating table "tracking" ${e}`);
  }
});
