import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  userToken: string;
  login: (username: string, password: string, from: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>(null);

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem('admin_token'));
  const navigate = useNavigate();

  const login = (username: string, password: string, from: string) => {
    if (
      username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      setUserToken(process.env.NEXT_PUBLIC_ADMIN_TOKEN);
      localStorage.setItem('admin_token', process.env.NEXT_PUBLIC_ADMIN_TOKEN);
      navigate(from, { replace: true });
    }
  };

  const logout = () => {
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
