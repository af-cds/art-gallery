import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
// import styles from '../components/Navigation/Navigation.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  
  // ['orange-red-and-green', 'clay-bust-sculptures']

  const [artPiecesInfo, setArtPiecesInfo] = useState({favourites: [] })

  function toggleFavorite(slug) {
    console.log(artPiecesInfo);
    console.log('slug:', slug);
    console.log('favourites:', artPiecesInfo.favourites);

    const isFav = artPiecesInfo.favourites.includes(slug);
    console.log(isFav)

    if (isFav) {
      setArtPiecesInfo({
        ...artPiecesInfo,
        favourites: artPiecesInfo.favourites.filter(piece => piece != slug),
      });
    } else {
      artPiecesInfo.favourites.push(slug);
      setArtPiecesInfo({
        ...artPiecesInfo,
        favourites: [...artPiecesInfo.favourites],
      });
    }
  }
  
  // console.log(artPiecesInfo)
  

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
        <Component 
        {...pageProps}
        toggleFavorite={toggleFavorite}
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        setArtPiecesInfo={setArtPiecesInfo}
        />
      </Layout>
      </SWRConfig>
    </>
  );
}
