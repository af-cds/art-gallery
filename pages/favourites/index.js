import React from "react";
import ArtPieces from "../../components/ArtPieces/ArtPieces";
import ArtPiecePreview from "../../components/ArtPiecePreview/ArtPiecePreview";

export default function Favourites({ pieces, artPiecesInfo, toggleFavorite }) {
  // const filteredPieces = pieces.filter();

  const includedArt = pieces.filter((piece) =>
    artPiecesInfo.favourites.includes(piece.slug)
  );

  return (
  <>
  <div style={{textAlign: "center", fontWeight: "600"}}>My Favourites</div>
  <br></br>
  <ArtPieces pieces={includedArt} toggleFavorite={toggleFavorite}/>
  </>
  )
}
