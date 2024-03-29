export const thousandsCommaSeparated = (string: string) =>
  string.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

export const decimalThousandsCommaSeparated = (
  number?: number | null,
  decimalPlaces?: number,
) => thousandsCommaSeparated((number || 0).toFixed(decimalPlaces || 2));

export const DATE_FORMAT = "YYYY-MM-DD";

export const formatTimestampDate = (value: string) => value.split("T")[0];

export const formatDayjsDate = (date: any) => date.format(DATE_FORMAT);
