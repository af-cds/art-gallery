import React from "react";
import ArtPieces from "../../components/ArtPieces/ArtPieces";
import styled from "styled-components";



export default function Pieces({ pieces, toggleFavorite }) {
  return <ArtPieces pieces={pieces} toggleFavorite={toggleFavorite}/>
}
