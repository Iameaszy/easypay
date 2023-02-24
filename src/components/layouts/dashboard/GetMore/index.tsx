import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { IconNames } from '../../../../utils/getIcons/types';
import TextWithIcon from '../../../common/TextWithIcon/index';

const GetMore = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        as="section"
        backgroundColor={theme.colors.bgBlue}
        boxShadow="0 0 0 130px hsl(187,52%,98%)"
        mt="80px"
      >
        <Flex flexDirection="row" justifyContent="space-between">
          <Box width="280px" mt="-10px">
            <Text
              color={theme.fontColors.light}
              fontSize="11px"
              letterSpacing="0.4em"
              lineHeight="2em"
              fontWeight="bold"
            >
              GET MORE FROM OUR <br />
              PATNERS
            </Text>
            <Heading
              color={theme.fontColors.light}
              lineHeight="1.3em"
              m="25px 0 35px 0"
            >
              We&apos;re there during rainy days.
            </Heading>
            <Button size="lg" variant="solid" borderRadius="18px">
              Start now
            </Button>
          </Box>
          <Box w="250px">
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              m="15px 0 30px 0"
            >
              <Box>
                <Image src="DollarSign.svg" alt="$" w="50px" h="50px" />
              </Box>
              <Box m="10px 0 0 10px">
                <Heading
                  color={theme.fontColors.darkBlue}
                  fontSize="18px"
                  m="5px 0 0 10px"
                >
                  Salary Advance
                </Heading>
              </Box>
            </Flex>
            <TextWithIcon
              text="Low interest salary advance"
              IconName={IconNames.CheckOutline}
              iconProps={{ color: 'green', fontSize: '20px' }}
            />
            <TextWithIcon
              text="We provide your pay evidence to lending platforms"
              IconName={IconNames.CheckOutline}
              iconProps={{ color: 'green', fontSize: '20px' }}
            />
          </Box>
          <Box w="280px">
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              m="15px 0 30px 0"
            >
              <Box>
                <Image src="Folder.svg" alt="book" w="50px" h="50px" />
              </Box>
              <Box m="10px 0 0 10px">
                <Heading
                  color={theme.fontColors.darkBlue}
                  fontSize="18px"
                  m="5px 0 0 10px"
                >
                  BNPL
                </Heading>
              </Box>
            </Flex>
            <TextWithIcon
              text="Get your home-office equipments"
              IconName={IconNames.CheckOutline}
              iconProps={{ color: 'green', fontSize: '20px' }}
            />
            <TextWithIcon
              text="Alternative pewer source to boost your productivity"
              IconName={IconNames.CheckOutline}
              iconProps={{ color: 'green', fontSize: '20px' }}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default GetMore;
