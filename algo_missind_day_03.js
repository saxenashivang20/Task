function generateWeekDictionary(inputDict) {
  const outputDict = {
    "Mon": 0,
    "Tue": 0,
    "Wed": 0,
    "Thu": 0,
    "Fri": 0,
    "Sat": 0,
    "Sun": 0
  };

  let prevDayVal = null;
  let prevDay = null;

  for (const [key, value] of Object.entries(inputDict)) {
    const date = new Date(key);
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });

    // Check if the current day is a gap day
    if (prevDayVal !== null && date.getTime() - prevDay.getTime() > 86400000) {
      const meanValue = (prevDayVal + value) / 2;
      const prevDayOfWeek = prevDay.toLocaleDateString("en-US", { weekday: "short" });
      const nextDayOfWeek = dayOfWeek;

      outputDict[prevDayOfWeek] += meanValue;
      outputDict[nextDayOfWeek] += meanValue;
    }

    outputDict[dayOfWeek] += value;
    prevDayVal = value;
    prevDay = date;
  }

  return outputDict;
}
