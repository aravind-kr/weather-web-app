import React from 'react';
import {
  Heading,
  InputGroup,
  Button,
  Box,
  InputRightElement,
  Input
} from '@chakra-ui/react';

const Header = ({ handleSearch, setSearchKey, isLoading, searchKey }) => {
  return (
    <Box p="2" w="100%">
      <Heading fontSize="lg" mb="2">
        Search for a city's current weather
      </Heading>
      <InputGroup size="lg">
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Enter a place or a country"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          onKeyDown={(e) => {
            e.key === 'Enter' && handleSearch();
          }}
        />
        <InputRightElement width="8rem">
          <Button
            isLoading={isLoading}
            h="2rem"
            size="sm"
            colorScheme="blue"
            mr="1.5"
            onClick={handleSearch}
          >
            Find Weather
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Header;
