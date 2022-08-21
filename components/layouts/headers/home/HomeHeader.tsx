import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import styles from './HomeHeader.module.css';

export interface IHomeHeader {
  sampleTextProp: string;
}

const HomeHeader: React.FC<IHomeHeader> = () => {
  return (
    <Container className={styles.container}>
      <Flex color="white">
        <Box bg="tomato" w={['80%', '25%']}>
          <Text>logo</Text>
        </Box>
        <Box bg="tomato">
          HamburgerIcon
          <Text>links</Text>
        </Box>
        <Box bg="tomato">
          <Text>links</Text>
        </Box>
        <Box bg="tomato">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                New Tab
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Container>
  );
};

export default HomeHeader;
