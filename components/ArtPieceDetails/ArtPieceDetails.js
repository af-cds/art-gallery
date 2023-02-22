import React, { useState } from "react";
import ArtDetails from "../../pages/art-pieces/[slug]";
import Image from "next/image";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { uid } from "uid";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

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
      <Image src={image} height={300} width={200} alt={title} />
      <FavouriteButton
        toggleFavorite={toggleFavorite}
        artPiecesInfo={artPiecesInfo}
        pieces={pieces}
        slug={slug}
      />
      <ul>
        <li>Title: {title} </li>
        <li>Name: {artist} </li>
        <li>Year: {year} </li>
        <li>Genre: {genre} </li>
      </ul>
      <Comments comments={comments}></Comments>
      <CommentForm onSubmitComment={handleNewComment}></CommentForm>
    </>
  );
}
