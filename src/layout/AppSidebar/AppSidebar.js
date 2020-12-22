import React from 'react';
import Sidebar from 'components/Sidebar';
import SidebarHeader from 'components/SidebarHeader';
import SidebarContent from 'components/SidebarContent';
import Typography from 'components/Typography';

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Typography variant="h3" component="h1">
          Duotones
        </Typography>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
