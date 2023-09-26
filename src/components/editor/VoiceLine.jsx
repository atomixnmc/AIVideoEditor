import {
  Box,
  Flex,
  Text,
  Avatar,
  Center,
  Button,
  useEditableControls,
  ButtonGroup,
  IconButton,
  EditablePreview,
  Tooltip,
  Editable,
  Input,
  useColorModeValue,
  EditableInput,
  Spacer,
} from '@chakra-ui/react';
import {
  BsCheck,
  BsFillGearFill,
  BsGripVertical,
  BsPlay,
  BsPlayBtn,
  BsXCircle,
} from 'react-icons/bs';

function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
      <IconButton icon={<BsCheck />} {...getSubmitButtonProps()} />
      <IconButton
        icon={<BsXCircle boxSize={3} />}
        {...getCancelButtonProps()}
      />
    </ButtonGroup>
  ) : null;
}
function EditableText({ text }) {
  /* Here's a custom control */

  return (
    <Editable
      minW="300px"
      defaultValue={text}
      isPreviewFocusable={true}
      selectAllOnFocus={false}
    >
      <Tooltip label="Click to edit" shouldWrapChildren={true}>
        <EditablePreview
          py={2}
          px={4}
          _hover={{
            background: useColorModeValue('gray.100', 'gray.700'),
          }}
        />
      </Tooltip>
      <Input py={2} px={4} as={EditableInput} />
      <EditableControls />
    </Editable>
  );
}
export default function VoiceLine({ line, setLineData }) {
  const { text, voiceName, pitch } = line;
  return (
    <Box bg="gray.50" p="4" mt="2" border="1px solid" borderColor="gray.300">
      <Flex>
        <Center>
          <BsGripVertical mr="2" />
        </Center>
        <Avatar
          mr="2"
          size={'sm'}
          src={
            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
          }
        />
        <EditableText w="400px" text={text} />
        <Spacer />
        <Flex>
          <Button size="sm" mr="2">
            <BsFillGearFill />
          </Button>
          <Button size="sm">
            <BsPlay />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
