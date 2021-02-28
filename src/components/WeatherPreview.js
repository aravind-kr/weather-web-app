import React from 'react';
import useSWR from 'swr';
import { Box, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import WeatherStats from './WeatherStats';
import { getWeatherImage } from '../lib/image';
import fetcher from '../utils/fetcher';

const WeatherPreview = ({ weather, isCelcius }) => {
  const { data } = useSWR(
    `/api/image?query=${weather.data.weather[0].description}`,
    fetcher
  );

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
        position="relative"
        backgroundImage={`url(${
          data ? data.data.response.results[0].urls.regular : '/sunny.jpg'
        })`}
        backgroundSize="cover"
      >
        <PreviewSheen />
        <Box zIndex="2" position="relative">
          <WeatherStats weather={weather} isCelcius={isCelcius} />
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherPreview;

const PreviewSheen = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  &:before {
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.3)
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
