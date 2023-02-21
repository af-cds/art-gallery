import React from "react";
import Image from "next/image";
<<<<<<< Updated upstream
import ArtDetails from "../../pages/art-pieces/[slug]";
import { useRouter } from "next/router";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  const router = useRouter();

  function onHandleClick() {
    const wholeURL = `/art-pieces/${slug}`;
    router.push(wholeURL);
  }
=======
import styled from "styled-components";

>>>>>>> Stashed changes

  return (
    <>
<<<<<<< Updated upstream
      <Image
        onClick={onHandleClick}
        src={image}
        height={300}
        width={200}
        alt="art pieces"
      ></Image>
      <dt>Title: {title}</dt>
=======
      <Image src={image} height={144} width={144} alt="art pieces"></Image>
      <dt>Title:{title}</dt>
>>>>>>> Stashed changes
      <dt>Artist: {artist}</dt>
    </>
  );
}
