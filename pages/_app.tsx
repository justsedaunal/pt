import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import ConfigureStore from "./store/configure-store";

export default function App({ Component, pageProps }: AppProps) {
  const store = ConfigureStore();
<<<<<<< HEAD
 
=======
>>>>>>> 46e4a417636404535a07f3715f9c2da3eaf4ebb1
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
