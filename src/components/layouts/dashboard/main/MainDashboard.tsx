import { Flex } from '@chakra-ui/react';

type props = {
  children: any;
};
const MainDashboard: React.FC<any> = ({ children }: props) => {
  return (
    <Flex color="white" width="100%" justify="center">
      <Flex width="80%" flexDirection="column" rowGap="100px">
        {children}
      </Flex>
    </Flex>
  );
};

export default MainDashboard;
