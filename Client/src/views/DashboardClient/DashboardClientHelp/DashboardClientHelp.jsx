import { Flex, Spacer } from '@chakra-ui/react';
import HelpClient from '../../../components/DashboardClient/HelpClient/HelpClient';


import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
    <div>
      
      
      <Flex>
        <SidebarClient />
        <Spacer  />
        <HelpClient />
      </Flex>
    </div>
  );
};

export default DashboardClient;