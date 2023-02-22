import React, { Component } from "react";

export default function CommentForm({ onSubmitComment }) {
  function onHandleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    //const comment = Object.fromEntries(formData);
    const commentText = event.target.elements.commentText.value;
    const commentDateTime = new Date().toLocaleString() + "";

    //console.log("comments added", commentText);
    // console.log("comments added =>", comment.commentText);
    onSubmitComment({ commentText, commentDateTime });
    console.log({ commentText, commentDateTime });

    event.target.reset();
  }

  return (
    <>
      <h1>Comment form</h1>
      <form className="commentForm" onSubmit={onHandleSubmit}>
        <label htmlFor="commentText">Add Comment</label>
        <textarea
          className="commentArea"
          name="commentText"
          id="commentText"
          rows={5}
          columns={10}
        ></textarea>
        <button className="commentSubmitButton">Send</button>
      </form>
    </>
  );
}
