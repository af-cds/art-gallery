export default function Comments({ comments }) {
  if (comments.length === 0) {
    // return <h3>No comments</h3>;
  } else {
    return (
      <div>
        <h3>Your comments:</h3>
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
