import { Box, Button, Center, Flex, Stack } from '@chakra-ui/react';
import { BsImage, BsPlusCircle } from 'react-icons/bs';

export default function Track({ icon, title, clips }) {
  return (
    <Flex minH="40px" borderBottom="1px #aaa solid">
      <Center w="80px" bg="gray.200">
        {icon}
      </Center>
      <Flex>
        <Button>
          <BsPlusCircle />
        </Button>
      </Flex>
    </Flex>
  );
}
