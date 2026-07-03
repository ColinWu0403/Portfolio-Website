// src/utils/date.js
export function formatDate(
  dateInput,
  options = { year: "numeric", month: "long", day: "numeric" },
) {
  if (!dateInput) return "";
  const str =
    dateInput instanceof Date
      ? dateInput.toISOString().slice(0, 10)
      : String(dateInput).slice(0, 10);
  const [year, month, day] = str.split("-").map(Number);
  if (!year || !month || !day) return "";
  return new Date(year, month - 1, day).toLocaleDateString("en-US", options);
}
