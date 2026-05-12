import { Box, InputBase, IconButton, Avatar, Typography, Select, MenuItem, Badge, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Header({ isSidebarCollapsed, setIsSidebarCollapsed, isManagementActive }) {
  return (
    <Box
      sx={{
        height: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 25px',
        position: 'relative',
        zIndex: 1000,
        backgroundColor: 'transparent',
      }}
    >
      {/* Left: Actions and Search */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {/* Calendar Icon */}
        <IconButton sx={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', p: 1.2 }}>
          <CalendarTodayIcon sx={{ fontSize: 18, color: '#4b5563' }} />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Add Button */}
          <Button 
            variant="contained"
            startIcon={<AddIcon />}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ 
              backgroundColor: '#7b61ff', 
              color: 'white', 
              borderRadius: '12px', 
              textTransform: 'none',
              fontWeight: 700,
              padding: '8px 24px',
              '&:hover': { backgroundColor: '#6a50e8' },
              boxShadow: '0 4px 10px rgba(123, 97, 255, 0.2)'
            }}
          >
            Qo'shish
          </Button>

          {/* Search Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: '8px 16px',
              width: '250px',
              border: '1px solid #e5e7eb',
              '&:focus-within': {
                borderColor: '#7b61ff',
                backgroundColor: '#fff',
                boxShadow: '0 0 0 4px rgba(123, 97, 255, 0.1)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <SearchIcon sx={{ color: '#9ca3af', fontSize: 22, mr: 1.5 }} />
            <InputBase
              placeholder="Qidirish..."
              sx={{
                flex: 1,
                fontSize: '0.95rem',
                fontWeight: 500,
                '& input::placeholder': {
                  color: '#9ca3af',
                  opacity: 1
                }
              }}
            />
          </Box>
        </Box>
      </Box>

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
