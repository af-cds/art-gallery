export default function Comments({ comments }) {
  if (comments.length === 0) {
    console.log("comments 0");
    return <h1>No comments</h1>;
  } else {
    return (
      <div>
        <h2>Your comments:</h2>
        <ul className="commentList">
          {comments.map((comment) => {
            return (
              <li key={comment.id} className="commentList-item">
                <h3 className="commentText">{comment.commentText}</h3>
                <span className="commentDateTime">
                  Date & Time : {comment.commentDateTime}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
