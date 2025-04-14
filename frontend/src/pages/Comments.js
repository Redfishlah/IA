import React, { useState } from "react";

export default function Comments({ loggedInUser }) {
  const [comments, setComments] = useState([]); // List of comments
  const [newComment, setNewComment] = useState(""); // New comment text

  const handleAddComment = () => {
    if (!loggedInUser) {
      alert("You need to be logged in to comment!");
      return;
    }

    if (!newComment.trim()) {
      alert("Comment cannot be empty!");
      return;
    }

    const comment = {
      id: Date.now(),
      username: loggedInUser.username, // Username of the logged-in user
      avatar: loggedInUser.avatar, // User's avatar
      text: newComment,
    };

    setComments([...comments, comment]); // Add the new comment to the list
    setNewComment(""); // Clear input field
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id)); // Remove comment by ID
  };

  return (
    <div>
      <h1>Comments Section</h1>

      {loggedInUser ? (
        <div>
          <h2>Welcome, {loggedInUser.username}!</h2>
          <img
            src={loggedInUser.avatar}
            alt="Profile"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
      ) : (
        <p>Please log in to leave a comment!</p>
      )}

      {/* Comment input */}
      <div>
        <textarea
          rows="3"
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          style={{ width: "100%", marginTop: "10px" }}
        />
        <button onClick={handleAddComment} style={{ marginTop: "10px" }}>
          Add Comment
        </button>
      </div>

      {/* Display comments */}
      <div style={{ marginTop: "20px" }}>
        <h2>Comments</h2>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={comment.avatar}
                alt="Avatar"
                style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
              />
              <div style={{ flex: 1 }}>
                <p>
                  <strong>{comment.username}:</strong> {comment.text}
                </p>
              </div>
              <button
                onClick={() => handleDeleteComment(comment.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}
