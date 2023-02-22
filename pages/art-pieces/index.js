import React from "react";
import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function Pieces({ pieces, toggleFavorite }) {
  return <ArtPieces pieces={pieces} toggleFavorite={toggleFavorite}/>;
}
