enum EType {
  LOGIN = "login",
  LOGOUT = "logout",
}

interface IDb {
  id: string;
  login_ts: string;
  logout_ts: string;
}

class HoursTracking {
  private db: IDb = [];

  login(id: string) {
    // get last record, if there a missing logout fill 9 hours

    db.push();
  }
}

export const db: IDb[] = [
  { id: "sds", start_ts: new Date(Date.now()).toISOString() },
];
