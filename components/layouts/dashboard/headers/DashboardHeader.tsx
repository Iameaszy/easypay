import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  BoxProps,
  Button,
  Flex,
  Hide,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemProps,
  MenuList,
  Show
} from '@chakra-ui/react';
import NextLink from 'next/link';

const HeaderMenuItem = ({
  children,
  ...props
}: { children: any } & MenuItemProps): any => {
  return (
    <MenuItem
      _active={{ backgroundColor: 'none' }}
      _focus={{ backgroundColor: 'none' }}
      paddingLeft="0"
      {...props}
    >
      {children}
    </MenuItem>
  );
};

const NavLink = ({
  text,
  path = '/',
  ...props
}: { text: string; path?: string } & BoxProps) => {
  return (
    <Box {...props}>
      <NextLink href={path} passHref>
        <Link color='white' _hover={{ textDecoration: 'none' }}>{text}</Link>
      </NextLink>
    </Box>
  );
};

const HomeHeader: React.FC<any> = () => {
  return (
    <Flex width="100%" bg="black" as="header" justify="center">
      <Flex width="60%" justify={{ base: 'space-between' }}>
        <Box maxW="125px">
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
          <Flex
            justify="space-between"
            alignItems="center"
            w="80%"
            maxWidth="800px"
            as="header"
          >
            <Box display="flex">
              <NavLink padding="30px" text="Contact Us" path="#contact" />
              <NavLink padding="30px" text="FAQ" path="#faq" />
              <NavLink padding="30px" text="Help" path="#help" />
            </Box>
            <Box w="15rem" display="flex" alignItems="center">
              <Button variant="transparent">Sign In</Button>
              <Button variant="solid">Open an account</Button>
            </Box>
          </Flex>
        </Show>
        <Hide above="sm">
          <Box as="header">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                style={{ backgroundColor: 'transparent' }}
                icon={<HamburgerIcon />}
              />

              <MenuList rootProps={{ width: '90%' }} border="none">
                <HeaderMenuItem>Contact Us</HeaderMenuItem>
                <HeaderMenuItem>FAQ</HeaderMenuItem>
                <HeaderMenuItem>Help</HeaderMenuItem>
                <HeaderMenuItem>Sign in</HeaderMenuItem>
                <HeaderMenuItem>
                  <Button variant="solid">Open an account</Button>
                </HeaderMenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Hide>
      </Flex>
    </Flex>
  );
};

export default HomeHeader;
