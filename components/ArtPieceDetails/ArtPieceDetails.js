import React from "react";
import ArtDetails from "../../pages/art-pieces/[slug]";
import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <Image src={image} height={300} width={200} alt={title} />
      <ul>
        <li>Title: {title} </li>
        <li>Name: {artist} </li>
        <li>Year: {year} </li>
        <li>Genre: {genre} </li>
      </ul>
    </>
  );
}
