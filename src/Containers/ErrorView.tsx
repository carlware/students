import { Flex, Text } from '@chakra-ui/core';
import React from 'react';

function Error() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Text> Cannot found the requested page</Text>
    </Flex>
  );
}

export default Error;