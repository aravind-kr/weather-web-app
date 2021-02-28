import React from 'react';
import { Heading, Flex, Button, Stack } from '@chakra-ui/react';

const Header = ({ setIsCelcius, isCelcius }) => {
  return (
    <Flex align="center" mb="4">
      <Heading fontSize="1.4rem" flexGrow="1">
        What's the Weather
      </Heading>
      <Flex justifyContent="flex-end" pl="8" pr="2">
        <Stack direction="row" justify="end" spacing={2} align="center">
          <Button
            variant={!isCelcius ? 'outline' : 'solid'}
            fontSize="sm"
            borderRadius="50%"
            colorScheme="blue"
            height="38px"
            width="36px"
            onClick={() => setIsCelcius(true)}
          >
            °C
          </Button>
          <Button
            variant={isCelcius ? 'outline' : 'solid'}
            fontSize="sm"
            borderRadius="50%"
            colorScheme="blue"
            height="38px"
            width="36px"
            onClick={() => setIsCelcius(false)}
          >
            °F
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Header;
