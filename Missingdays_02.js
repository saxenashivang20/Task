function fillMissingDays(D) {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const result = {};
  const dates = Object.keys(D).sort();

  for (let i = 0; i < dates.length; i++) {
    const date = new Date(dates[i]);
    const dayOfWeek = weekdays[date.getDay()];
    result[dayOfWeek] = (result[dayOfWeek] || 0) + D[dates[i]];


    if (i < dates.length - 1) {
      const nextDate = new Date(dates[i + 1]);
      const diffDays = (nextDate - date) / (1000 * 60 * 60 * 24);

      if (diffDays > 1) {
        const prevValue = D[dates[i]];
        const nextValue = D[dates[i + 1]];
        const meanValue = Math.round((prevValue + nextValue) / 2);
        const missingDays = diffDays - 1;

        for (let j = 1; j <= missingDays; j++) {
          const missingDate = new Date(date.getTime() + j * 24 * 60 * 60 * 1000);
          const missingDayOfWeek = weekdays[missingDate.getDay()];
          result[missingDayOfWeek] = (result[missingDayOfWeek] || 0) + meanValue;
        }
      }
    }
  }

  return result;
}
