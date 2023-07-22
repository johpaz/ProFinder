import { Flex, Spacer } from '@chakra-ui/react';
import FavoritesClient from '../../../components/DashboardClient/FavoritesClient/FavoritesClient';


import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
    <div>
      
      
      <Flex>
        <SidebarClient />
        <Spacer  />
        <FavoritesClient/>
      </Flex>
    </div>
  );
};

export default DashboardClient;