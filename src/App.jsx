import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';


export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained" color="success" endIcon={<SendIcon />} >Contained</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />} color='error'>Delete</Button>
    </Stack>
  );
}