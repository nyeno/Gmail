import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import { AppContextProvider } from "../context/appContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
