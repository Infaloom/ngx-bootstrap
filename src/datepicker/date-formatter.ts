import * as moment from 'moment';

export class DateFormatter {
  public format(date: Date, format: string, monthNames: string[]): string {
    if (monthNames) {
      moment.updateLocale('en', {
        months: monthNames,
      });
    }
    return moment(date.getTime()).format(format);
  }
}
