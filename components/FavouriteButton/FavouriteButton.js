import React from "react";

export default function FavouriteButton({
  isFavorite,
  artPiecesInfo,
  pieces,
  slug,
  setArtPiecesInfo,
  toggleFavorite
}) {

  return (
    <>
      <button onClick={() => toggleFavorite(slug)}> ♥ </button>
    </>
  );
}
