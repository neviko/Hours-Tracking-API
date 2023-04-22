import { getNowTime } from "../common/utils";
import { pool } from "../db/db";

export const login = async (userId: string) => {
  const { rows: logs } = await pool.query("SELECT * FROM tracking");
  console.log(logs);
  const nowTime = getNowTime();
  //TODO: check if there an open log and force closing it
  try {
    await pool.query(
      "INSERT INTO tracking (start_ts, end_ts, user_id) VALUES($1,$2,$3)",
      [nowTime, null, userId]
    );
  } catch (e) {
    console.error("Error while insert record into tracking\n", e);
  }
};
