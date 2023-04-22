import { formatDate } from "../common/utils";
import { pool } from "../db/db";

export const logout = async (email: string) => {
  //TODO: check if there an open log and force closing it
  try {
    const nowTime = formatDate(new Date());
    await pool.query("UPDATE tracking SET end_ts = $1 WHERE email=$2", [
      nowTime,
      email,
    ]);
  } catch (e) {
    console.error("Error while updating tracking record \n", e);
  }
};
