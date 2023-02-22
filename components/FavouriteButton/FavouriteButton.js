import React from "react";
import styled from "styled-components";

const BtnStyling = styled.button`
  display: flexbox;
  gap: 10px;
  background-color: #D6D2D2; 
  border: none; 
  font-size: xxx-large;
  align-self: center;
  align-items: center;
  text-align: center;
`;

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
      <BtnStyling onClick={() => toggleFavorite(slug)}> ♥ </BtnStyling>
    </>
  );
}
