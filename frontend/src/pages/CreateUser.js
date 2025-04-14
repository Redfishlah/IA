// src/CreateUser.js
import React, { useEffect, useState } from "react";

export default function UserApp() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  ////////
  const apiUrl = (path) => `${process.env.REACT_APP_API_BASE_URL}${path}`;
  ////////

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setProfilePic(file);
    } else {
      e.target.value = null;
      alert("Only JPG and PNG formats are allowed.");
    }
  };

  const handleRegister = async () => {
    if (!username || !password || !profilePic) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("avatar", profilePic);

    try {
      // const res = await fetch("/api/register", { /////////////
      const res = await fetch(apiUrl("/api/register"), {
      ///////////////////////////////////////////////////////////
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setLoggedInUser(data);
      alert("User registered successfully!");
      clearForm();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please provide both username and password!");
      return;
    }

    try {
      // const res = await fetch("/api/login", { /////
      const res = await fetch(apiUrl("/api/login"), {
      ////////////////////////////////////////////////
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setLoggedInUser(data);
      alert("Login successful!");
      clearForm();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setComments([]);
    alert("You have been logged out.");
  };

  const clearForm = () => {
    setUsername("");
    setPassword("");
    setProfilePic(null);
  };

  const fetchComments = async () => {
    try {
      // const res = await fetch("/api/comments");
      const res = await fetch(apiUrl("/api/comments"));
      //////////////////////////////////////////////
      
      const data = await res.json();
      setComments(data);
    } catch {
      alert("Failed to load comments.");
    }
  };

  const handleAddComment = async () => {
    if (!loggedInUser) {
      alert("You need to be logged in to comment!");
      return;
    }

    if (!newComment.trim()) {
      alert("Comment cannot be empty!");
      return;
    }

    try {
      // const res = await fetch("/api/comments", {
      const res = await fetch(apiUrl("/api/comments"), {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: newComment,
          user_id: loggedInUser.id,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setNewComment("");
      fetchComments();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      // const res = await fetch(`/api/comments/${id}`, {
      const res = await fetch(apiUrl(`/api/comments/${id}`), {

        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: loggedInUser.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      fetchComments();
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      fetchComments();
    }
  }, [loggedInUser]);

  return (
    <div>
      <h1>Please log in or register to join the comment section</h1>

      {!loggedInUser && (
        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setIsRegistering(true)} style={{ marginRight: "10px" }}>
            Register
          </button>
          <button onClick={() => setIsRegistering(false)}>Log In</button>
        </div>
      )}

      {isRegistering && !loggedInUser && (
        <div>
          <h2>Register</h2>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="file" accept="image/jpeg, image/png" onChange={handleFileChange} />
          <button onClick={handleRegister}>Register</button>
        </div>
      )}

      {!isRegistering && !loggedInUser && (
        <div>
          <h2>Log In</h2>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}

      {loggedInUser && (
        <div>
          <h2>Hi, {loggedInUser.username}!</h2>
          <img
            src={loggedInUser.avatar_url}
            alt="Profile"
            style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "10px" }}
          />
          <button onClick={handleLogout} style={{ marginBottom: "20px" }}>
            Log Out
          </button>
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
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p>
                      <strong>{comment.username}:</strong> {comment.text}
                    </p>
                  </div>
                  {comment.user_id === loggedInUser.id && (
                    <button onClick={() => handleDeleteComment(comment.id)} style={{ marginLeft: "10px" }}>
                      Delete
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
