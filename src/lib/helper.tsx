import dayjs from 'dayjs';

export const dateViewFormate = (value: string | number | Date | dayjs.Dayjs | null | undefined) => {
  if (!value) {
    return '';
  }
  return dayjs(value).format('dddd, MMMM D, YYYY h:mm A');
};

export const tableViewFormate = (
  value: string | number | Date | dayjs.Dayjs | null | undefined,
) => {
  if (!value) {
    return '';
  }
  return dayjs(value).format('DD-MMMM-YYYY');
};
export const todayDate = () => {
  return dayjs().format('YYYY-MM-DD');
};

export function getCurrentAcademicYear() {
  const today = dayjs();

  const year = today.year();
  const month = today.month() + 1; // month() is 0-indexed

  // If before April, academic year is previousYear-currentYear
  if (month < 4) {
    return `${year - 1}-${year}`;
  } else {
    return `${year}-${year + 1}`;
  }
}
