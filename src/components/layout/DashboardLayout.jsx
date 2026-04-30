import { useState } from 'react';
import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout() {
  const [openSettings, setOpenSettings] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();

  // Logic to determine if we are in management mode
  const isManagementActive = location.pathname.startsWith('/management');

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f5f6fa', overflow: 'hidden' }}>
      <Sidebar
        openSettings={openSettings}
        setOpenSettings={setOpenSettings}
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header
          isSidebarCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
          isManagementActive={isManagementActive}
        />
        <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
