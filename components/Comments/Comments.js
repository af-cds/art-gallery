export default function Comments({ comments }) {
  console.log("from comments:", comments);
  return (
    <div>
      <h2>Your comments:</h2>
      <ul className="commentList">
        {comments.map((comment) => {
          return (
            <li key={comment.id} className="commentList-item">
              <h3>{comment.commentText}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
