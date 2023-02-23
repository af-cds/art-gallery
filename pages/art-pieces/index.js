import React from "react";
import ArtPieces from "../../components/ArtPieces/ArtPieces";
import styled from "styled-components";



export default function Pieces({ pieces, toggleFavorite }) {

  return (
  <>
  <div style={{textAlign: "center", fontWeight: "600"}}>Collection</div>
  <br></br>
  <ArtPieces pieces={pieces} toggleFavorite={toggleFavorite}/>
  </>
  )
}
