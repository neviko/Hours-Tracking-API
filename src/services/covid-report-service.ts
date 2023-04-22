import { formatDate } from "../common/utils";
import { pool } from "../db/db";

export const getQuarantineList = async (email: string) => {
  // get all last week entries
  const { rows: lastWeekEntries } = await pool.query(
    "SELECT * FROM tracking WHERE email=$1 AND start_ts >= NOW() - interval '7' day",
    [email]
  );

  /**
   *
   * @returns the complete timeframe query
   */
  const queryBuilder = (): string => {
    const queryStr = lastWeekEntries.reduce((queryStr, item, index) => {
      const startTs = formatDate(new Date(item.start_ts));
      const endTs = formatDate(new Date(item.end_ts));
      return (queryStr += `(start_ts >= timestamp'${startTs}' AND start_ts < timestamp '${endTs}'
        OR end_ts >= timestamp '${startTs}' AND end_ts < timestamp '${endTs}') ${
        index !== lastWeekEntries.length - 1 ? "OR " : ""
      }`);
    }, "");

    return `SELECT DISTINCT email FROM tracking WHERE ${queryStr}`;
  };

  const query = queryBuilder();
  const { rows: infectedList } = await pool.query(query);

  const list = infectedList
    .map((item) => item.email)
    .filter((_email) => _email !== email);
  console.log(list);
  return list;
};
