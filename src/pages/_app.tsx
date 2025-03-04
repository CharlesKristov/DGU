import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionProvider } from 'next-auth/react';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
