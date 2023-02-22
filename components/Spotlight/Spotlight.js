import Image from "next/image";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import Favourites from "../FavouriteButton/FavouriteButton";

export default function Spotlight({ pieces, artPiecesInfo, setArtPiecesInfo }) {
  const totalArts = 11;
  let artKey = 0;

  const lengthOfPieces = pieces.length;
  function getRandomArt(lengthOfPieces) {
    artKey = Math.floor(Math.random() * lengthOfPieces);
  }

  getRandomArt(lengthOfPieces);

  const slugB = pieces[artKey].slug
  console.log(slugB)


  return (
    <>
      <section>
        <h2>Artist Name : {pieces[artKey].artist}</h2>
        <Image
          src={pieces[artKey].imageSource}
          height={400}
          width={300}
          alt={pieces[artKey].imageSource}
        ></Image>
        <>
          <FavouriteButton
          setArtPiecesInfo={setArtPiecesInfo}
          artPiecesInfo={artPiecesInfo}
          pieces={pieces}
          slugB={slugB} 
          />
        </>
      </section>
    </>
  );
}
