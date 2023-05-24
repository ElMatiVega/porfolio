import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../styles/NavBar.css';

export function NavBar() {
  return (
    <div className='root'>
    <AppBar position="static">
        <Toolbar>        
          <Typography variant="h6" className='title'sx>
            Matías Vega
          </Typography>
          <Button color="inherit">Acerca de mi</Button>
          <Button color="inherit">Estudios</Button>
          <Button color="inherit">Contactame</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

