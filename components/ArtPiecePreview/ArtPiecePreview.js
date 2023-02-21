import React from "react";
import Image from "next/image";
import ArtDetails from "../../pages/art-pieces/[slug]";
import { useRouter } from "next/router";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  const router = useRouter();

  function onHandleClick() {
    const wholeURL = `/art-pieces/${slug}`;
    router.push(wholeURL);
  }

  return (
    <>
      <Image
        onClick={onHandleClick}
        src={image}
        height={300}
        width={200}
        alt="art pieces"
      ></Image>
      <dt>Title: {title}</dt>
      <dt>Artist: {artist}</dt>
    </>
  );
}
