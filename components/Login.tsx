import { Button, Box, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../lib";

type FromState = { from: Location };

const Login = () => {
  const { login } = useAuth();
  const location = useLocation();
  const from = (location.state as FromState)?.from?.pathname || '/';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (
      username !== process.env.NEXT_PUBLIC_ADMIN_USERNAME ||
      password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      setLoginError(true);
      return;
    }

    login(username, password, from);
  };

  const onUsernameFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
    setLoginError(false);
  };

  const onPasswordFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
    setLoginError(false);
  }; 

  return (
    <Box
      component='form'
      autoComplete='off'
      onSubmit={onFormSubmit}
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
        <TextField variant='filled' label='Username' error={loginError} onChange={onUsernameFieldChange} />
        <TextField variant='filled' label='Password' error={loginError} onChange={onPasswordFieldChange} type='password' />
        <Button type='submit'>Login</Button>
    </Box>
  );
};

export default Login;
