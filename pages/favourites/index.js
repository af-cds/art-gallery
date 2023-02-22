import React from "react";
import ArtPieces from "../../components/ArtPieces/ArtPieces";
import ArtPiecePreview from "../../components/ArtPiecePreview/ArtPiecePreview";

export default function Favourites({ pieces, artPiecesInfo, toggleFavorite }) {
  // const filteredPieces = pieces.filter();
  console.log(pieces);
  console.log(artPiecesInfo.favourites);
  console.log(artPiecesInfo.favourites[0]);

  const includedArt = pieces.filter((piece) => artPiecesInfo.favourites.includes(piece.slug))
  console.log(includedArt);

  return <ArtPieces pieces={includedArt} toggleFavorite={toggleFavorite}/>;

}
