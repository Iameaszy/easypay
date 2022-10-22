import { Flex } from '@chakra-ui/react';

type props = {
  children: any;
};
const MainDashboard: React.FC<any> = ({ children }: props) => {
  return (
    <Flex color="white" width="100%" bg="black" justify="center">
      <Flex width="60%">{children}</Flex>
    </Flex>
  );
};

export default MainDashboard;
