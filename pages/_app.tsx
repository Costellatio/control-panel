import { CssBaseline } from '@mui/material';
import Background from '../components/Background';
import GlobalStyles from '../components/GlobalStyles';

function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <Background />

      <Component {...pageProps} />
    </>
  );
}

export default App;
