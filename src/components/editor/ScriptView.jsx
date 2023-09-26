import { Box, Button, Stack, Text, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import {
  BsArrowBarDown,
  BsArrowBarUp,
  BsBoxArrowLeft,
  BsPlus,
} from 'react-icons/bs';
import VoiceLine from './VoiceLine';

export default function ScriptView() {
  const [mode, setMode] = useState('list');
  const [lines, setLines] = useState([]);
  const addLine = () => {
    setLines([
      ...lines,
      {
        text: 'SampleText',
        voice: 'Laura',
      },
    ]);
  };
  return (
    <Box>
      <Box>
        {mode == 'import' ? (
          <Button onClick={(evt) => setMode('list')}>
            <BsBoxArrowLeft /> <Text ml="2">Back</Text>
          </Button>
        ) : (
          <>
            <Button bg="orange.100" mr="2" onClick={(evt) => setMode('import')}>
              <BsArrowBarUp />
              Import
            </Button>
            <Button bg="blue.100" onClick={(evt) => addLine()}>
              <BsPlus />
              Add line...
            </Button>
          </>
        )}
      </Box>
      {mode == 'import' ? (
        <Box p="2">
          <Textarea value={'Paste your script here'} />
          <Box>
            <Button bg="blue.300">Import</Button>
          </Box>
        </Box>
      ) : (
        <Stack mt="2" p="2" bg="gray.100" maxHeight="50vh" overflowY="scroll">
          {lines.map((line) => (
            <VoiceLine line={line} />
          ))}
        </Stack>
      )}
    </Box>
  );
}
