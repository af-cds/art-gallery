import Link from "next/link";
import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
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
  );
}
