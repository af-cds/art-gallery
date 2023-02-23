import Image from "next/image";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import Favourites from "../FavouriteButton/FavouriteButton";
import styled from "styled-components";

const SpotlightStyling = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
    
`;

const FrameStyling = styled.img`
    border: solid 15px;
    border-style: double;
    border-width: 5%
`;

export default function Spotlight({ pieces, artPiecesInfo, setArtPiecesInfo, toggleFavorite }) {
  const totalArts = 11;
  let artKey = 0;

  const lengthOfPieces = pieces.length;
  function getRandomArt(lengthOfPieces) {
    artKey = Math.floor(Math.random() * lengthOfPieces);
  }

  getRandomArt(lengthOfPieces);

  return (
    <>
    <SpotlightStyling>
        <h3>Artist Name: {pieces[artKey].artist}</h3>
        <FrameStyling
          src={pieces[artKey].imageSource}
          height={400}
          width={300}
          alt={pieces[artKey].imageSource}
        ></FrameStyling>
        <>
          <FavouriteButton
          toggleFavorite={toggleFavorite}
          setArtPiecesInfo={setArtPiecesInfo}
          artPiecesInfo={artPiecesInfo}
          pieces={pieces}
          slug={pieces[artKey].slug} 
          />
        </>
      </SpotlightStyling>
    </>
  );
}
