import { Button, Box, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../lib";

type FromState = { from: Location };

const Login = () => {
  const { login } = useAuth();
  const location = useLocation();
  const from = (location.state as FromState)?.from?.pathname || '/';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      component='form'
      autoComplete='off'
      onSubmit={() => login(username, password, from)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        height: '100%',
        maxWidth: '15vw',
        gap: '1.5rem',
      }}
    >
        <TextField label='Username' onChange={(event) => setUsername(event.currentTarget.value)} />
        <TextField label='Password' onChange={(event) => setPassword(event.currentTarget.value)} />
        <Button type='submit'>Login</Button>
    </Box>
  );
};

export default Login;
