import { formatDate, getNowTime } from "../common/utils";
import { pool } from "../db/db";

export const login = async (email: string) => {
  const { rows: logs } = await pool.query("SELECT * FROM tracking");
  console.log(logs);
  const nowTime = formatDate(new Date());
  //TODO: check if there an open log and force closing it
  try {
    await pool.query(
      "INSERT INTO tracking (start_ts, end_ts, email) VALUES($1,$2,$3)",
      [nowTime, null, email]
    );
  } catch (e) {
    console.error("Error while insert record into tracking\n", e);
  }
};
