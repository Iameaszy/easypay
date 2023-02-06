import { Box, Heading, Image, Text, useTheme } from '@chakra-ui/react';
import Icon from '../Icon';
import { IconNames } from '../Icon/types';

const Card = ({
  heading,
  body,
  iconName,
  imgSrc,
  footer,
}: {
  heading: string;
  body: string;
  imgSrc: string;
  footer: string;
  iconName?: IconNames;
}) => {
  const theme = useTheme();
  return (
    <Box textAlign="center" width="29%">
      <Image src={imgSrc} alt="free transfer" />
      <Heading
        color={theme.fontColors.darkBlue}
        fontSize="120%"
        marginTop="12%"
      >
        {heading}
      </Heading>
      <Text
        lineHeight="1.6em"
        fontSize="90%"
        color={theme.fontColors.light}
        marginTop="4%"
        margin="4% 0 10% 0"
      >
        {body}
      </Text>
      <Text
        color={theme.fontColors.lightBlue}
        fontSize="70%"
        fontWeight="bold"
        letterSpacing="0.3em"
        marginTop="15%"
        as="a"
        href=""
      >
        {footer} {iconName && <Icon iconName={iconName} />}
      </Text>
    </Box>
  );
};

export default Card;
