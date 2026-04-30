import { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Button, IconButton } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ClassIcon from '@mui/icons-material/Class';
import SchoolIcon from '@mui/icons-material/School';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';
import RoomIcon from '@mui/icons-material/Room';
import BookIcon from '@mui/icons-material/Book';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const menuItems = [
  { text: 'Asosiy', icon: <DashboardIcon />, path: '/dashboard' },
  { text: "O'qituvchilar", icon: <PeopleIcon />, path: '/teachers' },
  { text: 'Guruhlar', icon: <ClassIcon />, path: '/groups' },
  { text: 'Talabalar', icon: <SchoolIcon />, path: '/students' },
  { text: "Sovg'alar", icon: <CardGiftcardIcon />, path: '/gifts' },
];

const managementItems = [
  { text: 'Kurslar', icon: <BookIcon />, path: '/management/courses' },
  { text: 'Xonalar', icon: <RoomIcon />, path: '/management/rooms' },
  { text: 'Filial', icon: <RoomIcon />, path: '/management/branches' },
  { text: 'Xodimlar', icon: <PeopleIcon />, path: '/management/staff' },
  { text: 'Sabablar', icon: <BookIcon />, path: '/management/reasons' },
  { text: 'Rollar', icon: <PeopleIcon />, path: '/management/roles' },
  { text: 'Coin', icon: <AttachMoneyIcon />, path: '/management/coins' },
  { text: 'Xabar Yuborish', icon: <DashboardIcon />, path: '/management/messages' },
  { text: 'FAQ', icon: <BookIcon />, path: '/management/faq' },
  { text: 'Tekshiruv', icon: <CheckCircleIcon />, path: '/management/audit' },
];

export default function Sidebar({ openSettings, setOpenSettings, isSidebarCollapsed, setIsSidebarCollapsed }) {
  const [managementSelected, setManagementSelected] = useState(false);
  const location = useLocation();

  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
    setManagementSelected(true);
  };

  const handleMainItemClick = () => {
    setOpenSettings(false);
    setManagementSelected(false);
  };

  const activeStyles = {
    backgroundColor: '#7b61ff',
    color: '#fff',
    borderRadius: '12px',
    '&:hover': {
      backgroundColor: '#6a50e8',
    },
    '& .MuiListItemIcon-root': {
      color: '#fff',
    }
  };

  const defaultStyles = {
    borderRadius: '12px',
    marginBottom: '4px',
    '&:hover': {
      backgroundColor: '#f5f6fa',
    },
    '& .MuiListItemIcon-root': {
      color: '#4b5563',
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', flexShrink: 0, position: 'relative' }}>
      {/* Primary Sidebar Wrapper */}
      <Box sx={{ position: 'relative', height: '100%' }}>
        {/* Toggle Button - Now outside the overflow container */}
        <IconButton
          size="small"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          sx={{
            backgroundColor: '#7b61ff',
            color: 'white',
            borderRadius: 1,
            width: 24,
            height: 24,
            '&:hover': { backgroundColor: '#6a50e8' },
            position: 'absolute',
            right: -12, // Half of the button width
            top: 32,
            zIndex: 1500,
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          <ArrowBackIosNewIcon
            sx={{
              fontSize: 12,
              transition: 'transform 0.6s ease',
              transform: isSidebarCollapsed ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          />
        </IconButton>

        <Box
          sx={{
            width: isSidebarCollapsed ? 80 : 260,
            flexShrink: 0,
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: '0 30px 30px 0',
            borderRight: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            overflowX: 'hidden',
            zIndex: 20,
            transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '4px 0 10px rgba(0,0,0,0.02)'
          }}
        >
          {/* Logo Area */}
          <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 1, justifyContent: isSidebarCollapsed ? 'center' : 'flex-start' }}>
            <Box
              component="img"
              src="/educoin-logo-BveCYX-f.png"
              alt="EduCoin Logo"
              sx={{ height: isSidebarCollapsed ? 32 : 40, transition: 'height 0.6s ease' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            {!isSidebarCollapsed && (
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>
                EduCoin
              </Typography>
            )}
          </Box>

          {/* Main Menu */}
          <List sx={{ px: isSidebarCollapsed ? 1 : 2, flex: 1 }}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path && !openSettings && !location.pathname.startsWith('/management') && !managementSelected;
              return (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={item.path}
                    onClick={handleMainItemClick}
                    sx={{
                      ... (isActive ? activeStyles : defaultStyles),
                      justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                      px: isSidebarCollapsed ? 0 : 2
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: isSidebarCollapsed ? 0 : 40, justifyContent: 'center' }}>{item.icon}</ListItemIcon>
                    {!isSidebarCollapsed && (
                      <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: isActive ? 600 : 500 }} />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}

            {/* Management (Boshqarish) */}
            <ListItem disablePadding sx={{ mt: 1 }}>
              <ListItemButton
                onClick={handleSettingsClick}
                sx={{
                  ...((openSettings || location.pathname.startsWith('/management') || managementSelected) ? activeStyles : defaultStyles),
                  justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                  px: isSidebarCollapsed ? 0 : 2
                }}
              >
                <ListItemIcon sx={{ minWidth: isSidebarCollapsed ? 0 : 40, justifyContent: 'center' }}>
                  <SettingsIcon />
                </ListItemIcon>
                {!isSidebarCollapsed && (
                  <ListItemText
                    primary="Boshqarish"
                    primaryTypographyProps={{
                      fontSize: '0.9rem',
                      fontWeight: (openSettings || location.pathname.startsWith('/management') || managementSelected) ? 600 : 500
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          </List>

          {/* Subscription Box */}
          <Box sx={{ p: 2, mb: 2, mx: 2, backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #f3f4f6' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <CheckCircleIcon sx={{ color: '#f59e0b', fontSize: 28 }} />
              <Box>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>Obuna</Typography>
                <Typography sx={{ fontSize: '0.75rem', color: '#ef4444' }}>Obunangiz tugagan</Typography>
              </Box>
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#ef4444',
                color: 'white',
                textTransform: 'none',
                borderRadius: '8px',
                fontSize: '0.8rem',
                '&:hover': { backgroundColor: '#dc2626' }
              }}
            >
              Obunani yangilash
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Secondary Sidebar with smooth transition */}
      <Box
        sx={{
          width: openSettings ? 250 : 0,
          opacity: openSettings ? 1 : 0,
          visibility: openSettings ? 'visible' : 'hidden',
          flexShrink: 0,
          height: '100%',
          backgroundColor: '#ffffff',
          borderRight: openSettings ? '1px solid #e5e7eb' : 'none',
          overflowX: 'hidden',
          overflowY: 'auto',
          boxShadow: openSettings ? '4px 0 15px rgba(0,0,0,0.02)' : 'none',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 10
        }}
      >
        <Box sx={{ minWidth: 250 }}> {/* Inner box to prevent content squishing */}
          <Box sx={{ p: 3, pt: 3.5, pb: 1 }}>
            <Typography sx={{ fontWeight: 600, color: '#111827', fontSize: '1rem' }}>
              Menu
            </Typography>
          </Box>
          <List sx={{ px: 2 }}>
            {managementItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <ListItemButton
                  key={item.text}
                  component={NavLink}
                  to={item.path}
                  sx={isActive ? { ...activeStyles, mb: 0.5 } : { ...defaultStyles, mb: 0.5 }}
                >
                  <ListItemIcon sx={{ minWidth: 36, transform: 'scale(0.85)' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '0.85rem' }} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
