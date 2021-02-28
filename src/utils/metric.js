export function getTemperatureWithMetric(celsius, isCelcius) {
  return `${isCelcius ? celsius : Math.round(celsius * (9 / 5) + 32)}°${
    isCelcius ? 'C' : 'F'
  }`;
}
