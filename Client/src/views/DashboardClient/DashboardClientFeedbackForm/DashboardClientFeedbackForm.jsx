import { Flex, Spacer } from '@chakra-ui/react';
import FeedbackForm from '../../../components/DashboardClient/FeedbackForm/FeedbackForm';


import SidebarClient from '../../../components/DashboardClient/SidebarClient/SidebarClient';

const DashboardClient = () => {
  return (
    <div>
      
      
      <Flex>
        <SidebarClient />
        <Spacer  />
        <FeedbackForm/>
      </Flex>
    </div>
  );
};

export default DashboardClient;