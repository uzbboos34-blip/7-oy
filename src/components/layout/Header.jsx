import { Box, InputBase, IconButton, Avatar, Typography, Select, MenuItem, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Header({ isSidebarCollapsed, setIsSidebarCollapsed, isManagementActive }) {
  return (
    <Box
      sx={{
        height: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 25px',
      }}
    >
      {/* Right Actions */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

        {/* Language Selector */}
        <Select
          value="uz"
          size="small"
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            boxShadow: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 0 },
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontWeight: 500,
            '&:hover': { backgroundColor: '#f3f4f6' }
          }}
        >
          <MenuItem value="uz">O'zbekcha</MenuItem>
          <MenuItem value="ru">Русский</MenuItem>
        </Select>

        <IconButton sx={{ border: '1px solid #e5e7eb', borderRadius: '10px' }}>
          <Badge badgeContent={1} color="error">
            <NotificationsNoneIcon sx={{ color: '#4b5563', fontSize: 20 }} />
          </Badge>
        </IconButton>

        <IconButton sx={{ backgroundColor: '#1e293b', color: 'white', borderRadius: '10px', '&:hover': { backgroundColor: '#0f172a' } }}>
          <DarkModeIcon sx={{ fontSize: 20 }} />
        </IconButton>

        <Avatar sx={{ width: 36, height: 36, ml: 1, bgcolor: '#fca5a5' }} src="/avatar.jpg">
          A
        </Avatar>
      </Box>
    </Box>
  );
}
