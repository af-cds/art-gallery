import Navigation from "../components/Navigation/Navigation";
import Spotlight from "../components/Spotlight/Spotlight";
import Pieces from "./art-pieces";
import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";

export default function SpotlightPage({pieces}) {
  
  return (
    <>
      {/* // <ArtPieces pieces={data} /> */}
      <Spotlight pieces={pieces} />
    </>
  );
}
