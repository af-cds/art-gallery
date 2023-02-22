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

export default function SpotlightPage({pieces, setArtPiecesInfo, artPiecesInfo}) {
  
  return (
    <>
    <SpotlightStyling>
            <Spotlight pieces={pieces} artPiecesInfo={artPiecesInfo}  setArtPiecesInfo={setArtPiecesInfo}/>
            </SpotlightStyling>
    </>
  );
}
