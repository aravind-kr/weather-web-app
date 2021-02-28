export const getWeather = async (query) => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
  );
  return await res.json();
};
