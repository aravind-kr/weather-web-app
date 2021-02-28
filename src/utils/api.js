export const deleteWeatherHistory = async (id) => {
  return await fetch(`/api/history/${id}`, {
    method: 'DELETE'
  });
};

export const createWeatherHistory = async (data) => {
  const response = await fetch(`/api/history`, {
    body: new URLSearchParams({
      location: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    method: 'POST'
  });
  return await response.json();
};

export const getWeatherDetails = async (key) => {
  const response = await fetch(`/api/weather?query=${key}`);
  return await response.json();
};
