import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Heading,
  Stack,
  TableCaption,
  Link as ChakraLink,
  Skeleton
} from '@chakra-ui/react';
import useSWR, { mutate } from 'swr';
import { format } from 'date-fns';
import fetcher from '../utils/fetcher';
import { deleteWeatherHistory } from '../utils/api';
import { getTemperatureWithMetric } from '../utils/metric';

const WeatherHistor = ({ isCelcius }) => {
  const { data } = useSWR('/api/history', fetcher);

  const onWeatherHistoryDelete = async (id) => {
    await deleteWeatherHistory(id);

    mutate(
      '/api/history',
      async (data) => ({
        data: data.data.filter((h) => h.id !== id)
      }),
      false
    );
  };
  return (
    <Box
      pt="5"
      pb="2"
      my="5"
      w="100%"
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="sm"
      p="4"
    >
      <Heading as="h3" size="sm" mb="4" mx="1">
        Previous Results:
      </Heading>
      <Table size="md">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Location</Th>
            <Th>Temperature</Th>
            <Th>Humidity</Th>
            <Th></Th>
          </Tr>
        </Thead>
        {data ? (
          data.data.length > 0 ? (
            <Tbody>
              {data.data.map((history) => (
                <Tr key={history.id}>
                  <Td fontSize="sm">
                    {format(new Date(history.created), 'dd MMM yyyy - hh:mm a')}
                  </Td>
                  <Td fontSize="sm">{history.location}</Td>
                  <Td fontSize="sm">
                    {getTemperatureWithMetric(history.temperature, isCelcius)}
                  </Td>
                  <Td fontSize="sm">{history.humidity}</Td>
                  <Td isNumeric>
                    <ChakraLink
                      color="blue.500"
                      fontSize="sm"
                      fontWeight="bold"
                      onClick={() => onWeatherHistoryDelete(history.id)}
                    >
                      Delete
                    </ChakraLink>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          ) : (
            <TableCaption>No Previous results found.</TableCaption>
          )
        ) : null}
      </Table>
      {!data && (
        <Stack w="100%" bg="white" p="2" borderWidth="1px" borderTopWidth="0">
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
        </Stack>
      )}
    </Box>
  );
};

export default WeatherHistor;
