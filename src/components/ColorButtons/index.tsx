import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { amber } from '@mui/material/colors';



const ColorButtonAmber = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(amber[500]),
  backgroundColor: amber[600],
  '&:hover': {
    backgroundColor: amber[800],
  },
}));

const ButtonAmber = () => {
  return (
    <ColorButtonAmber variant="outlined">CONTACTAME</ColorButtonAmber>
  );
}


export default ButtonAmber;