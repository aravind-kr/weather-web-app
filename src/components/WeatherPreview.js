import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { getTemperatureWithMetric } from '../utils/metric';

const WeatherPreview = ({ weather, isCelcius }) => {
  return (
    <Box px="2" w="100%">
      <Box
        justifyContent="center"
        p="8"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        my="10"
        bg="white"
      >
        {weather && weather.data.cod === 200 ? (
          <Text
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontWeight="bold"
            fontSize="lg"
          >
            {weather.data.name} <br />
            {getTemperatureWithMetric(weather.data.main.temp, isCelcius)}
          </Text>
        ) : (
          <Text
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontWeight="bold"
            fontSize="lg"
          >
            {weather && weather.data.cod === '404'
              ? 'Invalid location'
              : "Search for a city's current weather"}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default WeatherPreview;
