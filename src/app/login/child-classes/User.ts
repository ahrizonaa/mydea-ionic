import { Moment } from 'moment';
export class User {
  constructor(u: UserData) {
    this._id = u._id;
    this.tel = u.tel || '';
    this.displayname = u.displayname || '';
    this.settings = u.settings || { bgindex: 2 };
    this.perks = u.perks || {};
  }
  public _id: string | undefined = '';
  public displayname: string = '';
  public tel: string = '';
  public validatedon: Moment | undefined;
  public authenticated: boolean | undefined;
  public settings: any;
  public auth_date_diff: number;
  public perks: any;
}

export interface UserData {
  _id?: string;
  tel?: string;
  displayname?: string;
  validatedon?: Moment;
  settings?: any;
  perks?: any;
}
