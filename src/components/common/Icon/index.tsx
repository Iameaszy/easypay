import {
  CheckIcon,
  Icon as ChakraIcon,
  IconProps,
  MinusIcon,
} from '@chakra-ui/icons';
import { BsCheckCircle } from 'react-icons/bs';
import { IconNames } from './types/index';

const Icons = {
  check: CheckIcon,
  checkOutline: BsCheckCircle,
  minusIcon: MinusIcon,
};

const Icon = ({ iconName, ...props }: IconProps & { iconName: IconNames }) => (
  <ChakraIcon as={Icons[iconName]} {...props} />
);

export default Icon;
