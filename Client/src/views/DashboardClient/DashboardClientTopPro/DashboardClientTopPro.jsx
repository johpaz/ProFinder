import { Flex, Spacer } from '@chakra-ui/react';
import TopPro from '../../../components/Home/TopPro/TopPro';


import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
    <div>
      
      
      <Flex>
        <SidebarClient />
        <Spacer  />
        <TopPro />
      </Flex>
    </div>
  );
};

export default DashboardClient;