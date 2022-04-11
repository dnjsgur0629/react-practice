export const pad = (time: number) => {
  return `0${time}`.slice(-2);
}

export const getSimpleDateFormat = (d: Date, separator: string = '-') => {  //Data를 받아서 0000-00-00형식으로 반환
  return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join(separator);
}

export const isSameDay = (a: Date, b: Date): boolean => {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}