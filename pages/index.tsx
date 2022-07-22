import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import Background from '../components/Background';
import Panel from "../components/Panel";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../components/Login";
import { AuthProvider, defaultTheme } from "../lib";

function Root() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <AuthProvider>
          <CssBaseline />
          <Background />

            <Routes>
              <Route path="/" element={<ProtectedRoute><Panel /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
            </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default Root;
