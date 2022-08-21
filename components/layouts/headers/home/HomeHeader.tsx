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
  Hide,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import styles from './HomeHeader.module.css';

export interface IHomeHeader {
  sampleTextProp: string;
}

const HomeHeader: React.FC<IHomeHeader> = () => {
  return (
    <Container bg="black" className={styles.container}>
      <Flex color="white" justifyContent={{ base: 'space-between' }}>
        <Box w="40%">
          <NextLink href="#" passHref>
            <Link>
              <Image
                boxSize="100%"
                alt="logo"
                srcSet="logo-4x.png 500w, logo-800.png 800w, logo-1154.png 1154w"
                sizes="(max-width: 479px) 46vw, (max-width: 767px) 110px, 135px"
                src="logo-4x.png"
                objectFit="contain"
              />
            </Link>
          </NextLink>
        </Box>
        <Show above="sm">
          <Box w="60%">
            <Text>links</Text>
          </Box>
          <Box w="20%">
            <Text>actions</Text>
          </Box>
        </Show>
        <Hide above="sm">
          <Box bg="tomato">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
              />

              <MenuList w="100%">
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
        </Hide>
      </Flex>
    </Container>
  );
};

export default HomeHeader;
