import {
  addMonths,
  addYears,
  differenceInCalendarYears,
  differenceInDays,
  differenceInMonths,
} from "date-fns";

export const generateCountdownString = (date) => {
  const diffInYears = differenceInCalendarYears(new Date(), date);
  const countdownMinusYears = addYears(date, diffInYears);

  const diffInMonths = differenceInMonths(new Date(), countdownMinusYears);
  const countdownMinusYearsAndMonths = addMonths(
    countdownMinusYears,
    diffInMonths
  );

  const diffInDays = differenceInDays(new Date(), countdownMinusYearsAndMonths);

  const numberOfSegments = [diffInMonths, diffInDays].filter((x) => x).length;

  return `
  ${diffInYears} years${numberOfSegments > 1 ? `,` : ``}
  ${diffInMonths ? `${diffInMonths} month${diffInMonths > 1 ? `s` : ``},` : ``}
  ${diffInDays > 0 ? `and ${diffInDays} day${diffInDays > 1 ? `s` : ``}` : ``}`;
};
