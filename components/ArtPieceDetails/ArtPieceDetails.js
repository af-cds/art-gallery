import React, { useState } from "react";
import ArtDetails from "../../pages/art-pieces/[slug]";
import Image from "next/image";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { uid } from "uid";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import styled from "styled-components";

const CenterStyling = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 10px;
`;


export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  toggleFavorite,
  artPiecesInfo,
  slug,
  pieces,
}) {
  const [comments, setComments] = useState([]);

  function handleNewComment(newComment) {
    setComments([...comments, { id: uid(), ...newComment }]);
  }

  //export default function ArtPieceDetails({ image, title, artist, year, genre, toggleFavorite, artPiecesInfo, slug, pieces}) {
  return (
    <>
      <div style={{textAlign: "center", fontWeight: "400"}}>Details</div>
    <CenterStyling>
      <Image src={image} height={300} width={200} alt={title} />
      <FavouriteButton
        toggleFavorite={toggleFavorite}
        artPiecesInfo={artPiecesInfo}
        pieces={pieces}
        slug={slug}
      />
      <>
        <div>Title: {title} </div>
        <div>Name: {artist} </div>
        <div>Year: {year} </div>
        <div>Genre: {genre} </div>
      </>
      </CenterStyling>
      <CenterStyling>
      <Comments comments={comments}></Comments>
      </CenterStyling>
      <CommentForm onSubmitComment={handleNewComment}></CommentForm>
    </>
  );
}
