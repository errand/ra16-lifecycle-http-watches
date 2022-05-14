import {nanoid} from 'nanoid';

export default class Watch {
  constructor(title, timeZone) {
    this.id = nanoid();
    this.title = title;
    this.timeZone = timeZone;
  }
}
