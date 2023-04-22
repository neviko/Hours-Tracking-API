import { getNowTime } from "../common/utils";
import { pool } from "../db/db";

export const logout = async (userId: string) => {
  //TODO: check if there an open log and force closing it
  try {
    const nowTime = getNowTime();
    await pool.query("UPDATE tracking SET end_ts = $1 WHERE email=$2", [
      nowTime,
      userId,
    ]);
  } catch (e) {
    console.error("Error while updating tracking record \n", e);
  }
};
