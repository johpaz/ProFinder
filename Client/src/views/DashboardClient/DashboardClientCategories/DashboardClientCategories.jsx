import { Flex} from '@chakra-ui/react';
import Categories from "../../Categories/Categories"

import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
    <div>
      
      
      <Flex>
        <SidebarClient />
        
        <Categories />
      </Flex>
    </div>
  );
};

export default DashboardClient;