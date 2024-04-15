import { AppProps } from "next/app";
import { Container } from "./styles";

import { queryClient } from "@/api/queryClient";
import { theme } from "@/styles";
import { GlobalStyles } from "@/styles/global";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { Header } from "@/component/Header";
import { Footer } from "@/component/Footer";
import { CartContextProvider } from "@/context/CartProvider";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <ThemeProvider theme={theme}>
            <GlobalStyles />

            <CartContextProvider>
              <Container>
                <Header />
              </Container>

              <Component {...pageProps} />

              <Footer />
            </CartContextProvider>
          </ThemeProvider>
        </Theme>
      </QueryClientProvider>
    </>
  );
}

export default App;
