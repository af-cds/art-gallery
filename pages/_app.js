import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
// import styles from '../components/Navigation/Navigation.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  // const [artCollection, setArtCollection] = useState([]);
  const [artPiecesInfo, setArtPiecesInfo] = useState({ favourites: [] });

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} pieces={data} />
        </Layout>
      </SWRConfig>
    </>
  );
}
