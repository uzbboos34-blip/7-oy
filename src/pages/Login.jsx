import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
  Snackbar,
  Alert
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!login || !password) {
      setError('Login va parolni kiriting');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: login, // Backend LoginDto expects 'phone'
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login xatosi yuz berdi');
      }

      setSuccess(true);
      console.log('Login success:', data);
      
      // Optionally save token and redirect here
      localStorage.setItem('token', data.token);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);

    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      {/* ========== Left Side - Illustration ========== */}
      <Box
        sx={{
          flex: '0 0 47%',
          backgroundColor: '#1e3a5f',
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >

        {/* Study illustration */}
        <Box
          component="img"
          src="/study.svg"
          alt="Student studying"
          sx={{
            width: '100%',
            maxWidth: 750,
            objectFit: 'contain',
            position: 'relative',
            zIndex: 1,
          }}
        />
      </Box>

      {/* ========== Right Side - Login Form ========== */}
      <Box
        sx={{
          flex: '0 0 53%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          position: 'relative',
          px: { xs: 3, sm: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 360,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
          }}
        >
          {/* Najot Logo */}
          <Box
            component="img"
            src="/najot-logo.svg"
            alt="Najot Ta'lim Logo"
            sx={{
              width: 150,
              height: 75,
              objectFit: 'contain',
              mb: 0.3,
            }}
          />

          {/* Title */}
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '0.88rem',
              letterSpacing: 1.5,
              color: '#111827',
              mb: 3,
              textAlign: 'center',
            }}
          >
            LEARNING MANAGEMENT SYSTEM
          </Typography>

          {/* ===== Form ===== */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 0 }}
          >
            {/* Login field */}
            <Typography
              sx={{ fontSize: '0.8rem', color: '#374151', fontWeight: 500, mb: 0.5 }}
            >
              Login
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Loginni kiriting"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  '& fieldset': { borderColor: '#d1d5db' },
                  '&:hover fieldset': { borderColor: '#9ca3af' },
                  '&.Mui-focused fieldset': { borderColor: '#3b82f6', borderWidth: 1 },
                },
                '& input': { py: '9px', px: '12px', color: '#374151' },
              }}
            />

            {/* Password field */}
            <Typography
              sx={{ fontSize: '0.8rem', color: '#374151', fontWeight: 500, mb: 0.5 }}
            >
              Parol
            </Typography>
            <TextField
              fullWidth
              size="small"
              type={showPassword ? 'text' : 'password'}
              placeholder="Parolni kiriting"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePassword}
                        edge="end"
                        size="small"
                        tabIndex={-1}
                        sx={{ color: '#9ca3af', mr: '-4px' }}
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ fontSize: 18 }} />
                        ) : (
                          <Visibility sx={{ fontSize: 18 }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                mb: 2.5,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  '& fieldset': { borderColor: '#d1d5db' },
                  '&:hover fieldset': { borderColor: '#9ca3af' },
                  '&.Mui-focused fieldset': { borderColor: '#3b82f6', borderWidth: 1 },
                },
                '& input': { py: '9px', px: '12px', color: '#374151' },
              }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disableElevation
              disabled={loading}
              sx={{
                py: 1.1,
                backgroundColor: '#0b1c4bff',
                borderRadius: '4px',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                letterSpacing: 0.3,
                '&:hover': {
                  backgroundColor: '#1e40af',
                },
                '&.Mui-disabled': {
                  backgroundColor: '#9ca3af',
                  color: '#e5e7eb'
                }
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Kirish'}
            </Button>
          </Box>
        </Box>

        <Snackbar 
          open={!!error} 
          autoHideDuration={6000} 
          onClose={() => setError(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert 
            onClose={() => setError(null)} 
            severity="error" 
            variant="filled"
            sx={{ 
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(239, 68, 68, 0.25)',
              alignItems: 'center',
              fontWeight: 500,
              letterSpacing: 0.3
            }}
          >
            {error}
          </Alert>
        </Snackbar>

        <Snackbar 
          open={success} 
          autoHideDuration={6000} 
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert 
            onClose={() => setSuccess(false)} 
            severity="success" 
            variant="filled"
            sx={{ 
              width: '100%',
              backgroundColor: '#10b981',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(16, 185, 129, 0.25)',
              alignItems: 'center',
              fontWeight: 500,
              fontSize: '0.95rem',
              letterSpacing: 0.3,
              px: 3,
              py: 1
            }}
          >
            Muvaffaqiyatli kirdingiz! 🎉
          </Alert>
        </Snackbar>

        {/* Footer */}
        <Typography
          sx={{
            position: 'absolute',
            bottom: 12,
            color: '#1c1d20ff',
            fontSize: '0.8rem',
            textAlign: 'center',
          }}
        >
          Copyrient o 2021 0 tasnkent Uniersity of intermation technologies
        </Typography>
      </Box>
    </Box>
  );
}
