import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist, key }) {
  console.log(image);
  return (
    <>
      <dt>image</dt>
      <Image src={image} height={144} width={144} alt="art pieces"></Image>
      <dt>Title:</dt>
      <dd>{title}</dd>
      <dt>Artist:</dt>
      <dd>{artist}</dd>
    </>
  );
}
