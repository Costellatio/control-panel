import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import './Global.css';

function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    (!isMounted || typeof window === 'undefined') ? null : <Component {...pageProps} />
  );
}

export default App;
