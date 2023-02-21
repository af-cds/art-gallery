import Link from "next/link";
import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";

const PreviewStyling = styled.section`
  display: flexbox;
  gap: 10px;
  
`;
export default function ArtPieces({ pieces }) {
  return (
<<<<<<< Updated upstream
    <>
      <h2>Art Pieces</h2>
      <div>
        {pieces.map((piece) => (
          <ul key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
            ></ArtPiecePreview>
          </ul>
        ))}
      </div>
    </>
=======
    <PreviewStyling>
    <div>
      {pieces.map((piece) => (
        <ul key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          ></ArtPiecePreview>
        </ul>
      ))}
    </div>
    </PreviewStyling>
>>>>>>> Stashed changes
  );
}
