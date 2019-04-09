const WEEK_DAYS = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота"
];

let date = new Date();

let dayStr = WEEK_DAYS[date.getDay()];
let timeStr = `${date.getHours()}:${date.getMinutes()}`;

alert(`Сегодня: ${dayStr}.\nТекущее время: ${timeStr}`);
