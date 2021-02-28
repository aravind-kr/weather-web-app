import React from 'react';
import { Box } from '@chakra-ui/react';
import { mutate } from 'swr';
import { Container } from '../components/Container';
import Header from '../components/Header';
import WeatherHistory from '../components/WeatherHistory';
import WeatherPreview from '../components/WeatherPreview';
import WeatherSearchForm from '../components/WeatherSearchForm';
import { getWeatherDetails, createWeatherHistory } from '../utils/api';

const Index = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [weather, setWeather] = React.useState(null);
  const [isCelcius, setIsCelcius] = React.useState(true);
  const [searchKey, setSearchKey] = React.useState('');

  const handleSearch = async () => {
    setIsLoading(true);
    const weather = await getWeatherDetails(searchKey);
    setWeather(weather);
    if (weather.data.name) {
      const storedWeather = await createWeatherHistory(weather.data);
      mutate('/api/history', (h) => h, true);
    }
    setIsLoading(false);
  };

  const toggleMetric = () => {
    setIsCelcius(!isCelcius);
  };

  return (
    <Container
      minHeight="100vh"
      width="100vw"
      padding={['20px', '40px', '60px 50px 100px']}
      position="relative"
      bg="gray.100"
    >
      <Box maxW="48rem" w="100%">
        <Header setIsCelcius={setIsCelcius} isCelcius={isCelcius} />
        <Box
          background="white"
          borderRadius="lg"
          p="3"
          boxShadow="sm"
          mx="auto"
        >
          <WeatherSearchForm
            handleSearch={handleSearch}
            setSearchKey={setSearchKey}
            isLoading={isLoading}
            searchKey={searchKey}
          />
          <WeatherPreview weather={weather} isCelcius={isCelcius} />
        </Box>
        <WeatherHistory isCelcius={isCelcius} />
      </Box>
    </Container>
  );
};

export default Index;
