import Layout from "../components/Layout";
import Context from "../context/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}

export default MyApp;
