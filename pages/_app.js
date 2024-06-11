import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { Suspense } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Suspense fallback={<p>Fetching thauharu...</p>}>
          <Component {...pageProps} />
        </Suspense>
      </Layout>
    </>
  );
}

export default MyApp;
