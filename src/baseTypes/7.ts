/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  MON,
  TUE,
  WED,
  THI,
  FRI,
  SAT,
  SUN,
}

function isWeekend(day: Weekdays): boolean {
  return day === Weekdays.SAT || day === Weekdays.SUN;
}
