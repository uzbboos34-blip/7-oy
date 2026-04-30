import React from 'react';
import { Box, Typography, Grid, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const stats = [
  { title: 'Sinflar', value: 0, icon: <PeopleIcon sx={{ color: '#7b61ff' }} /> },
  { title: 'Fanlar', value: 0, icon: <MenuBookIcon sx={{ color: '#7b61ff' }} /> },
  { title: 'Talabalar', value: 1, icon: <SchoolIcon sx={{ color: '#7b61ff' }} /> },
  { title: "Sovg'alar", value: 3, icon: <CardGiftcardIcon sx={{ color: '#7b61ff' }} /> },
  { title: "O'qituvchilar", value: 0, icon: <PersonIcon sx={{ color: '#7b61ff' }} /> },
];

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 600, color: '#111827', mb: 0.5 }}>
        Salom, creator!
      </Typography>
      <Typography variant="body2" sx={{ color: '#6b7280', mb: 4 }}>
        EduCoin platformasiga xush kelibsiz!
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #e5e7eb',
                backgroundColor: '#ffffff',
                height: '100%',
                width: '245px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                borderRadius: '8px',
              }}
            >
              <Box sx={{ mb: 1, color: '#7b61ff' }}>
                {React.cloneElement(stat.icon, { sx: { fontSize: 24 } })}
              </Box>
              <Typography variant="body2" sx={{ color: '#4b5563', fontWeight: 500, mb: 0.5 }}>
                {stat.title}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Accordion elevation={0} sx={{ border: '1px solid #e5e7eb', borderRadius: '12px', '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 500, color: '#4b5563' }}>Dars Jadvali</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            Dars jadvali bu yerda ko'rsatiladi...
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
