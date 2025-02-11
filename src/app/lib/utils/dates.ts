import { parse, format, isSameMonth, isSameYear } from "date-fns";

export const formatSailingDepartureAndReturnDates = (
  departureDateString: string,
  returnDateString: string,
) => {
  // Parse the dates into Date objects
  const departureDate: Date = parse(
    departureDateString,
    "yyyy-MM-dd",
    new Date(),
  );
  const returnDate: Date = parse(returnDateString, "yyyy-MM-dd", new Date());

  // Format the dates
  const formattedDepartureDay: string = format(departureDate, "d"); // Day of the month (e.g., "28")
  const formattedReturnDay: string = format(returnDate, "d"); // Day of the month (e.g., "02")
  const formattedDepartureMonth: string = format(departureDate, "MMM"); // Abbreviated month name (e.g., "Sept")
  const formattedReturnMonth: string = format(returnDate, "MMM"); // Abbreviated month name (e.g., "Oct")
  const formattedYear: string = format(departureDate, "yyyy"); // Year (e.g., "2021")

  // Check if the dates are in the same month and year
  const sameMonth: boolean = isSameMonth(departureDate, returnDate);
  const sameYear: boolean = isSameYear(departureDate, returnDate);

  // Format the final string
  let formattedDateRange: string;
  if (sameMonth && sameYear) {
    // Same month and year
    formattedDateRange = `${formattedDepartureMonth} ${formattedDepartureDay}-${formattedReturnDay}, ${formattedYear}`;
  } else if (sameYear) {
    // Different months, same year
    formattedDateRange = `${formattedDepartureMonth} ${formattedDepartureDay} - ${formattedReturnMonth} ${formattedReturnDay}, ${formattedYear}`;
  } else {
    // Different years
    formattedDateRange = `${formattedDepartureMonth} ${formattedDepartureDay}, ${formattedYear} - ${formattedReturnMonth} ${formattedReturnDay}, ${format(returnDate, "yyyy")}`;
  }

  return formattedDateRange;
};
