import { Flex, Spacer } from '@chakra-ui/react';
import IntroductionDash from '../../../components/DashboardClient/IntroductionDash/IntroductionDash';

import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
    <div>
      
      
      <Flex>
        <SidebarClient />
        <Spacer  />
        <IntroductionDash/>
      </Flex>
    </div>
  );
};

export default DashboardClient;