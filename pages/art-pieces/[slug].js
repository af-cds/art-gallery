import React from "react";
import { useRouter } from "next/router";
// import Image from "next/image";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";

export default function ArtDetails({ pieces }) {
  const router = useRouter();
  const slug = router.query.slug;

  const artDetails = pieces.find((piece) => piece.slug === slug);

  if (!artDetails) {
    return null;
  }

  const { imageSource, name, artist, year, genre } = artDetails;

  return (
    <ArtPieceDetails
      image={imageSource}
      title={name}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
}
