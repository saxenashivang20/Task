function sumValuesByDayOfWeek(D) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const result = {};

  for (const dateStr in D) {
    const date = new Date(dateStr);
    const dayOfWeek = daysOfWeek[date.getDay()];

    if (dayOfWeek in result) {
      result[dayOfWeek] += D[dateStr];
    } else {
      result[dayOfWeek] = D[dateStr];
    }
  }

  return result;
}
