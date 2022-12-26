import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import ConfigureStore from "./store/configure-store";
import Home from ".";

export default function App({ Component, pageProps }: AppProps) {
  const store = ConfigureStore();

  return (
    <Provider store={store}>
      <Home>
        <Component {...pageProps} />
      </Home>
    </Provider>
  );
}
