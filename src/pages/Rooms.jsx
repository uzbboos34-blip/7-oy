import { useState } from 'react';
import { 
  Box, Typography, Button, IconButton, Tabs, Tab, Grid, Paper, Chip, 
  Drawer, TextField, Stack, Divider 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SyncIcon from '@mui/icons-material/Sync';
import CloseIcon from '@mui/icons-material/Close';

const roomsData = [
  { name: 'genious room', capacity: 15 },
  { name: 'Impact room', capacity: 12 },
  { name: '1A', capacity: 25 },
  { name: '205-xona', capacity: 32 },
  { name: '16-xona', capacity: 18 },
  { name: '5 xona', capacity: 30 },
  { name: 'IELTS with Islombek', capacity: 20 },
  { name: 'Beginner', capacity: 18 },
  { name: '99', capacity: 25 },
];

export default function Rooms() {
  const [tabIndex, setTabIndex] = useState(1); // 1 = Xonalar
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>
        Boshqarish
      </Typography>
      
      {/* Top Tabs */}
      <Tabs 
        value={tabIndex} 
        onChange={(e, v) => setTabIndex(v)} 
        sx={{ 
          minHeight: 36,
          mb: 3,
          borderBottom: '1px solid #e5e7eb',
          '& .MuiTabs-indicator': { backgroundColor: '#7b61ff', height: 2 },
          '& .MuiTab-root': { 
            textTransform: 'none', 
            minWidth: 'auto', 
            minHeight: 36, 
            fontWeight: 500, 
            fontSize: '0.85rem', 
            color: '#6b7280',
            mr: 2,
            px: 0.5
          },
          '& .Mui-selected': { color: '#7b61ff !important' }
        }}
      >
        <Tab label="Kurslar" />
        <Tab label="Xonalar" />
        <Tab label="Filiallar" />
        <Tab label="Xodimlar" />
        <Tab label="Sabablar" />
        <Tab label="Rollar" />
        <Tab label="Coin" />
        <Tab label="Xabar yuborish" />
        <Tab label="Tekshiruv" />
      </Tabs>

      {/* Main Content Area */}
      <Paper elevation={0} sx={{ border: '1px solid #e5e7eb', borderRadius: '12px', p: 3, pb: 6, backgroundColor: '#ffffff' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>
              Xonalar
            </Typography>
            <IconButton size="small">
              <SyncIcon sx={{ fontSize: 18, color: '#9ca3af' }} />
            </IconButton>
          </Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setIsDrawerOpen(true)}
            sx={{
              backgroundColor: '#7b61ff',
              textTransform: 'none',
              borderRadius: '8px',
              px: 2.5,
              py: 1,
              boxShadow: '0 4px 12px rgba(123, 97, 255, 0.2)',
              '&:hover': { backgroundColor: '#6a50e8', boxShadow: '0 6px 16px rgba(123, 97, 255, 0.3)' }
            }}
          >
            Xonani qo'shish
          </Button>
        </Box>

        {/* Rooms Grid - Forced 4 columns */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            }, 
            gap: 2 
          }}
        >
          {roomsData.map((room) => (
            <Box
              key={room.name}
              sx={{
                border: '1px solid #f3f4f6',
                borderRadius: '12px',
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                transition: 'all 0.2s ease',
                '&:hover': { 
                  borderColor: '#7b61ff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                }
              }}
            >
                <Box>
                  <Typography sx={{ fontWeight: 600, color: '#111827', fontSize: '0.9rem', mb: 0.3 }}>
                    {room.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: '#6b7280' }}>
                    Sig'imi: {room.capacity}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <IconButton size="small" sx={{ color: '#9ca3af', '&:hover': { color: '#ef4444' } }}>
                    <DeleteIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#9ca3af', '&:hover': { color: '#7b61ff' } }}>
                    <EditIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Box>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Add Room Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: { width: { xs: '100%', sm: 500 } }
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Drawer Header */}
          <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Xonani qo'shish
            </Typography>
            <IconButton onClick={() => setIsDrawerOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />

          {/* Drawer Content */}
          <Box sx={{ width:"350px", p: 3, flexGrow: 1 }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#374151' }}>
                  Nomi *
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Xona nomi"
                  size="small"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                />
              </Box>
              <Box>
                <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#374151' }}>
                  Sig'imi *
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Masalan: 20"
                  size="small"
                  type="number"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                />
              </Box>
            </Stack>
          </Box>

          {/* Drawer Footer */}
          <Divider />
          <Box sx={{ p: 2.5, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button 
              variant="text" 
              onClick={() => setIsDrawerOpen(false)}
              sx={{ textTransform: 'none', color: '#6b7280', fontWeight: 500 }}
            >
              Bekor qilish
            </Button>
            <Button 
              variant="contained" 
              sx={{ 
                backgroundColor: '#7b61ff', 
                textTransform: 'none', 
                borderRadius: '8px',
                px: 3,
                '&:hover': { backgroundColor: '#6a50e8' }
              }}
            >
              Saqlash
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
