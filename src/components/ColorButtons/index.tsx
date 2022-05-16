import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { amber } from '@mui/material/colors';



const ColorButtonAmber = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(amber[500]),
  backgroundColor: amber[600],
  border:'none',
  '&:hover': {
    backgroundColor: amber[800],
    border:'none'
  },
}));

const ButtonAmber = () => {
  return (
    <ColorButtonAmber variant="outlined" sx={{marginTop:3}}>CONTACTAME</ColorButtonAmber>
  );
}


export default ButtonAmber;