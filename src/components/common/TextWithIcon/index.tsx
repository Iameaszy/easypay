import { IconProps } from '@chakra-ui/icons';
import { Box, Flex, Text, TextProps } from '@chakra-ui/react';
import { Icon } from '../../../utils/getIcons/index';
import { IconNames } from '../../../utils/getIcons/types/index';

const TextWithIcon = ({
  text,
  IconName,
  iconProps = {},
  textProps = {},
}: {
  text: string;
  IconName: IconNames;
  iconProps?: IconProps;
  textProps?: TextProps;
}) => {
  return (
    <Box display="flex" alignItems="center" gap="8px" marginBottom="10px">
      <Flex padding={'5px'}>
        <Icon iconName={IconName} {...iconProps} />
      </Flex>
      <Text
        color="rgb(138, 149, 173)"
        fontSize="15px"
        fontWeight="400"
        lineHeight="21px"
        {...textProps}
      >
        {text}
      </Text>
    </Box>
  );
};

export default TextWithIcon;
