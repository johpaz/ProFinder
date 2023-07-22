import { Flex, Spacer } from '@chakra-ui/react';
import EditClient from '../../../components/DashboardClient/EditClient/EditClient';

import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClientEditForm = () => {
  return (
    <div>
      
      
      <Flex>
        <SidebarClient />
        <Spacer  />
        <EditClient/>
      </Flex>
    </div>
  );
};

export default DashboardClientEditForm;