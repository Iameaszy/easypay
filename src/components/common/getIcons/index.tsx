import {
  CheckIcon,
  Icon as ChakraIcon,
  IconProps,
  MinusIcon,
} from '@chakra-ui/icons';
import { BsCheckCircle } from 'react-icons/bs';
import { IconNames } from '../Icon/types';

const Icons = {
  check: CheckIcon,
  checkOutline: BsCheckCircle,
  minusIcon: MinusIcon,
};

export const Icon = ({
  iconName,
  ...props
}: IconProps & { iconName: IconNames }) => {
  return <ChakraIcon as={Icons[iconName]} {...props} />;
};
