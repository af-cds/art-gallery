import React from "react";
import Image from "next/image";
import ArtDetails from "../../pages/art-pieces/[slug]";
import { useRouter } from "next/router";
import styled from "styled-components";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

const PiecesStyling = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-self: center;
`;


export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  artPiecesInfo,
  pieces,
  toggleFavorite,
}) {
  const router = useRouter();

  function onHandleClick() {
    const wholeURL = `/art-pieces/${slug}`;
    router.push(wholeURL);
  }
  return (
    <PiecesStyling>
      <Image
        onClick={onHandleClick}
        src={image}
        height={300}
        width={200}
        alt="art pieces"
      ></Image>
      <FavouriteButton
        toggleFavorite={toggleFavorite}
        artPiecesInfo={artPiecesInfo}
        pieces={pieces}
        slug={slug}
      />
      <dt>Title: {title}</dt>
      <br></br>
      <dt>Artist: {artist}</dt>
    </PiecesStyling>
  );
}
