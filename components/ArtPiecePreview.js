import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist, key }) {
  console.log(image);
  return (
    <>
      <dt>image</dt>
      <Image src={image} height={300} width={200} alt="art pieces"></Image>
      <dt>Title:</dt>
      <dd>{title}</dd>
      <dt>Artist:</dt>
      <dd>{artist}</dd>
    </>
  );
}
