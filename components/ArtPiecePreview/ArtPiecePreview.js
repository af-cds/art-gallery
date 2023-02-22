import React from "react";
import Image from "next/image";
import ArtDetails from "../../pages/art-pieces/[slug]";
import { useRouter } from "next/router";
import styled from "styled-components";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

export default function ArtPiecePreview({ image, title, artist, slug, artPiecesInfo, pieces }) {
  const router = useRouter();
  const slugB = slug

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
      <FavouriteButton
      artPiecesInfo={artPiecesInfo}
      pieces={pieces}
      slugB={slugB}       
      />
      <dt>Title:{title}</dt>
      <dt>Artist: {artist}</dt>
    </>
  );
}
