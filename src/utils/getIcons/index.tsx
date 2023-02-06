import { CheckIcon, Icon as ChakraIcon, IconProps } from '@chakra-ui/icons';
import { BsCheckCircle } from 'react-icons/bs';
import { IconNames } from './types/index';

const Icons = {
  check: CheckIcon,
  checkOutline: BsCheckCircle,
};

export const Icon = ({
  iconName,
  ...props
}: IconProps & { iconName: IconNames }) => {
  return <ChakraIcon as={Icons[iconName]} {...props} />;
};
