import Navigation from "../components/Navigation/Navigation";
import Spotlight from "../components/Spotlight/Spotlight";
import Pieces from "./art-pieces";
import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";
import styled from "styled-components";


const SpotlightStyling = styled.section`
  display: flex;
  flex-wrap: column wrap;
  justify-content: center;
`;

export default function SpotlightPage({pieces, setArtPiecesInfo, artPiecesInfo, toggleFavorite}) {
  
  return (
    <>
    <div style={{textAlign: "center", fontWeight: "600"}}>Art Gallery</div>
    <SpotlightStyling>
            <Spotlight pieces={pieces} artPiecesInfo={artPiecesInfo}  setArtPiecesInfo={setArtPiecesInfo} toggleFavorite={toggleFavorite}/>
            </SpotlightStyling>
    </>
  );
}
