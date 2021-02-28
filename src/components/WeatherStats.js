import React from 'react';
import styled from '@emotion/styled';
import {
  Flex,
  Text,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { getTemperatureWithMetric } from '../utils/metric';

const WeatherStats = ({ weather, isCelcius }) => (
  <StyledWeatherPreview className="stats">
    <Stat maxW="130px" className="stats-main">
      <img
        src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather.data.weather[0].icon}.svg`}
      />
      <StatNumber>
        {getTemperatureWithMetric(weather.data.main.temp, isCelcius)}
      </StatNumber>
      <StatHelpText mt="2">
        {format(new Date(weather.data.dt * 1000), 'EEEE')},&nbsp;
        <Text as="span" fontSize="sm" color="gray.400">
          {format(new Date(weather.data.dt * 1000), 'h:mm a')}
        </Text>
      </StatHelpText>
      <Divider />
      <StatHelpText mt="2">{weather.data.weather[0].description}</StatHelpText>
      <StatLabel></StatLabel>
    </Stat>
    <Flex flexGrow="1" direction="column" ml="8" justifyContent="space-between">
      <StatGroup className="stats-group">
        <Stat>
          <StatLabel>Location</StatLabel>
          <StatNumber>{weather.data.name}</StatNumber>
          <StatHelpText> {weather.data.sys.country}</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Humidity</StatLabel>
          <StatNumber>{weather.data.main.humidity}</StatNumber>
          <StatHelpText>
            {weather.data.main.humidity > 60
              ? 'Humid'
              : weather.data.main.humidity > 60
              ? 'Dry'
              : 'Normal'}
          </StatHelpText>
        </Stat>
      </StatGroup>

      <StatGroup className="stats-group">
        <Stat>
          <StatLabel>Wind</StatLabel>
          <StatNumber>{weather.data.wind.speed}</StatNumber>
          <StatHelpText>
            {weather.data.wind.deg} <span>↔</span>
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Visibility</StatLabel>
          <StatNumber>{weather.data.visibility}</StatNumber>
        </Stat>
      </StatGroup>
    </Flex>
  </StyledWeatherPreview>
);

export default WeatherStats;

const StyledWeatherPreview = styled(Flex)`
  @media screen and (max-width: 40em) {
    flex-direction: column;
    .stats-main img {
      margin: 0 auto;
    }
    .stats-group .chakra-stat {
      margin-bottom: 2rem;
      width: 100%;
      align-items: flex-start;
    }
    .stats-group {
      margin-bottom: 3rem;
      flex-direction: column;
      align-items: center;
    }
    .stats-main {
      text-align: center;
      max-width: 100%;
      margin-bottom: 3rem;
    }
  }
`;
