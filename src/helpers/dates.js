import { format, register as registerLocaleTimeago } from "timeago.js";

/* eslint-disable */
const localeFunc = (number, index, totalSec) => {
  // number: the timeago / timein number;
  // index: the index of array below;
  // totalSec: total seconds between date to be formatted and today's date;
  return [
    ["gerade eben", "vor einer Weile"],
    ["vor %s Sekunden", "in %s Sekunden"],
    ["vor 1 Minute", "in 1 Minute"],
    ["vor %s Minuten", "in %s Minuten"],
    ["vor 1 Stunde", "in 1 Stunde"],
    ["vor %s Stunden", "in %s Stunden"],
    ["vor 1 Tag", "in 1 Tag"],
    ["vor %s Tagen", "in %s Tagen"],
    ["vor 1 Woche", "in 1 Woche"],
    ["vor %s Wochen", "in %s Wochen"],
    ["vor 1 Monat", "in 1 Monat"],
    ["vor %s Monaten", "in %s Monaten"],
    ["vor 1 Jahr", "in 1 Jahr"],
    ["vor %s Jahren", "in %s Jahren"]
  ][index];
};

registerLocaleTimeago('de-locale', localeFunc)

export default {
  createDateAndSubstract(days) {
    const result = new Date();
    result.setDate(result.getDate() - days);
    return result;
  },

  createAndSubstractMinutes(minutes) {
    const result = new Date();
    result.setMinutes(result.getMinutes() - minutes);
    return result;
  },

  timeago(date) {
    return format(date, 'de-locale');
  }
};
