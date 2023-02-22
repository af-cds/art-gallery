import React, { Component } from "react";
import styled from "styled-components";



const CommentsStyling = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  gap: 10px;
  border-radius: 25px;

`;

export default function CommentForm({ onSubmitComment }) {
  function onHandleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    const commentText = formElements.commentText.value;
    const commentDateTime = new Date().toLocaleString() + "";

    onSubmitComment({ commentText, commentDateTime });

    event.target.reset();
  }

  return (
    
      <form className="commentForm" onSubmit={onHandleSubmit}>
        <CommentsStyling>
        <label htmlFor="commentText">Add Comment</label>
        <textarea
          className="commentArea"
          name="commentText"
          id="commentText"
          rows={5}
          columns={10}
        ></textarea>
        <button className="commentSubmitButton">Send</button>
        </CommentsStyling>
      </form>
  );
}
