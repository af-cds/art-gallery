import Link from "next/link";
import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";

const PiecesStyling = styled.section`
  padding: 5%;
  gap: 10px;
  border: solid 2px;
  border-radius: 10px;
`;

export default function ArtPieces({ pieces, toggleFavorite }) {
  return (
    <>
      <div>
        {pieces.map((piece) => (
          <PiecesStyling>
          <div key={piece.slug}>
            <ArtPiecePreview
              toggleFavorite={toggleFavorite}
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
            ></ArtPiecePreview>
          </div>
          </PiecesStyling>
        ))}
      </div>
    </>
  );
}
