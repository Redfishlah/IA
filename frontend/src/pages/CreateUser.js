// // import React, { useState } from "react";

// // export default function UserSystem() {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [profilePic, setProfilePic] = useState(null);
// //   const [registeredUser, setRegisteredUser] = useState(null); // 註冊用戶資料
// //   const [loggedInUser, setLoggedInUser] = useState(null); // 登入用戶資料

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
// //       setProfilePic(file);
// //     } else {
// //       e.target.value = null; // 清空檔案欄位
// //       alert("Only JPG and PNG formats are allowed.");
// //     }
// //   };

// //   const handleRegister = () => {
// //     if (!username || !password || !profilePic) {
// //       alert("All fields are required!");
// //       return;
// //     }

// //     // 模擬註冊完成，將資料存入狀態
// //     const newUser = {
// //       username: username,
// //       password: password,
// //       avatar: URL.createObjectURL(profilePic), // 模擬上傳的頭像
// //     };

// //     setRegisteredUser(newUser);
// //     alert("User registered successfully: " + username);

// //     // 重置表單
// //     setUsername("");
// //     setPassword("");
// //     setProfilePic(null);
// //   };

// //   const handleLogin = () => {
// //     if (!username || !password) {
// //       alert("Please provide both username and password!");
// //       return;
// //     }

// //     // 模擬登入，檢查是否與註冊資料匹配
// //     if (registeredUser && username === registeredUser.username && password === registeredUser.password) {
// //       setLoggedInUser(registeredUser);
// //       alert("Login successful: " + username);
// //     } else {
// //       alert("Invalid username or password!");
// //     }

// //     // 清空表單
// //     setUsername("");
// //     setPassword("");
// //   };

// //   return (
// //     <div>
// //       <h1>User System</h1>
      
// //       {/* 註冊介面 */}
// //       <div>
// //         <h2>Register</h2>
// //         <input
// //           type="text"
// //           placeholder="Username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <input type="file" accept="image/jpeg, image/png" onChange={handleFileChange} />
// //         <button onClick={handleRegister}>Register</button>
// //       </div>

// //       {/* 登入介面 */}
// //       <div style={{ marginTop: "20px" }}>
// //         <h2>Login</h2>
// //         <input
// //           type="text"
// //           placeholder="Username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <button onClick={handleLogin}>Login</button>
// //       </div>

// //       {/* 顯示註冊用戶資訊 */}
// //       {registeredUser && (
// //         <div className="user-container" style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
// //           <h3>Registered User</h3>
// //           <p>Username: {registeredUser.username}</p>
// //           <img
// //             src={registeredUser.avatar}
// //             alt="Registered Profile"
// //             style={{ width: "100px", height: "100px", borderRadius: "50%" }}
// //           />
// //         </div>
// //       )}

// //       {/* 顯示登入用戶資訊 */}
// //       {loggedInUser && (
// //         <div className="user-container" style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
// //           <h3>Logged-In User</h3>
// //           <p>Username: {loggedInUser.username}</p>
// //           <img
// //             src={loggedInUser.avatar}
// //             alt="Logged-In Profile"
// //             style={{ width: "100px", height: "100px", borderRadius: "50%" }}
// //           />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// /////////////////////

// // import React, { useState } from "react";

// // export default function UserApp() {
// //   const [isRegistering, setIsRegistering] = useState(true); // Toggle between register and login
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [profilePic, setProfilePic] = useState(null);
// //   const [registeredUser, setRegisteredUser] = useState(null); // Store registered user details
// //   const [loggedInUser, setLoggedInUser] = useState(null); // Store logged-in user details
// //   const [comments, setComments] = useState([]); // Store comments
// //   const [newComment, setNewComment] = useState(""); // Store new comment text

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
// //       setProfilePic(file);
// //     } else {
// //       e.target.value = null; // Clear invalid file input
// //       alert("Only JPG and PNG formats are allowed.");
// //     }
// //   };

// //   const handleRegister = () => {
// //     if (!username || !password || !profilePic) {
// //       alert("All fields are required!");
// //       return;
// //     }

// //     const newUser = {
// //       username,
// //       password,
// //       avatar: URL.createObjectURL(profilePic),
// //     };

// //     setRegisteredUser(newUser);
// //     setLoggedInUser(newUser); // Automatically log in after registration
// //     alert("User registered successfully!");
// //     clearForm();
// //   };

// //   const handleLogin = () => {
// //     if (!username || !password) {
// //       alert("Please provide both username and password!");
// //       return;
// //     }

// //     if (registeredUser && username === registeredUser.username && password === registeredUser.password) {
// //       setLoggedInUser(registeredUser);
// //       alert("Login successful!");
// //     } else {
// //       alert("User not found or incorrect information!");
// //     }
// //     clearForm();
// //   };

// //   const handleLogout = () => {
// //     setLoggedInUser(null); // Clear logged-in user
// //     setComments([]); // Clear comments
// //     alert("You have been logged out.");
// //   };

// //   const clearForm = () => {
// //     setUsername("");
// //     setPassword("");
// //     setProfilePic(null);
// //   };

// //   const handleAddComment = () => {
// //     if (!loggedInUser) {
// //       alert("You need to be logged in to comment!");
// //       return;
// //     }

// //     if (!newComment.trim()) {
// //       alert("Comment cannot be empty!");
// //       return;
// //     }

// //     const comment = {
// //       id: Date.now(),
// //       username: loggedInUser.username,
// //       avatar: loggedInUser.avatar,
// //       text: newComment,
// //     };

// //     setComments([...comments, comment]);
// //     setNewComment(""); // Clear input field
// //   };

// //   const handleDeleteComment = (id) => {
// //     setComments(comments.filter((comment) => comment.id !== id));
// //   };

// //   return (
// //     <div>
// //       <h1>Please log in or register to join the comment section</h1>

// //       {/* Register/Login Toggle */}
// //       {!loggedInUser && (
// //         <div style={{ marginBottom: "20px" }}>
// //           <button onClick={() => setIsRegistering(true)} style={{ marginRight: "10px" }}>
// //             Register
// //           </button>
// //           <button onClick={() => setIsRegistering(false)}>Log In</button>
// //         </div>
// //       )}

// //       {/* Register Form */}
// //       {isRegistering && !loggedInUser && (
// //         <div>
// //           <h2>Register</h2>
// //           <input
// //             type="text"
// //             placeholder="Username"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           <input type="file" accept="image/jpeg, image/png" onChange={handleFileChange} />
// //           <button onClick={handleRegister}>Register</button>
// //         </div>
// //       )}

// //       {/* Login Form */}
// //       {!isRegistering && !loggedInUser && (
// //         <div>
// //           <h2>Log In</h2>
// //           <input
// //             type="text"
// //             placeholder="Username"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           <button onClick={handleLogin}>Log In</button>
// //         </div>
// //       )}

// //       {/* Comments Section and Logout */}
// //       {loggedInUser && (
// //         <div>
// //           <h2>Hi, {loggedInUser.username}!</h2>
// //           <img
// //             src={loggedInUser.avatar}
// //             alt="Profile"
// //             style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "10px" }}
// //           />
// //           <button onClick={handleLogout} style={{ marginBottom: "20px" }}>
// //             Log Out
// //           </button>
// //           <div>
// //             <textarea
// //               rows="3"
// //               placeholder="Write your comment..."
// //               value={newComment}
// //               onChange={(e) => setNewComment(e.target.value)}
// //               style={{ width: "100%", marginTop: "10px" }}
// //             />
// //             <button onClick={handleAddComment} style={{ marginTop: "10px" }}>
// //               Add Comment
// //             </button>
// //           </div>
// //           <div style={{ marginTop: "20px" }}>
// //             <h2>Comments</h2>
// //             {comments.length > 0 ? (
// //               comments.map((comment) => (
// //                 <div
// //                   key={comment.id}
// //                   style={{
// //                     border: "1px solid #ccc",
// //                     padding: "10px",
// //                     marginBottom: "10px",
// //                     display: "flex",
// //                     alignItems: "center",
// //                   }}
// //                 >
// //                   <img
// //                     src={comment.avatar}
// //                     alt="Avatar"
// //                     style={{
// //                       width: "50px",
// //                       height: "50px",
// //                       borderRadius: "50%",
// //                       marginRight: "10px",
// //                     }}
// //                   />
// //                   <div style={{ flex: 1 }}>
// //                     <p>
// //                       <strong>{comment.username}:</strong> {comment.text}
// //                     </p>
// //                   </div>
// //                   <button
// //                     onClick={() => handleDeleteComment(comment.id)}
// //                     style={{ marginLeft: "10px" }}
// //                   >
// //                     Delete
// //                   </button>
// //                 </div>
// //               ))
// //             ) : (
// //               <p>No comments yet.</p>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// /////////////////////

// // frontend/CreateUserWithAPI.js
// import React, { useEffect, useState } from "react";

// export default function UserApp() {
//   const [isRegistering, setIsRegistering] = useState(true);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [profilePic, setProfilePic] = useState(null);
//   const [user, setUser] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");

//   useEffect(() => {
//     if (user) fetchComments();
//   }, [user]);

//   const fetchComments = async () => {
//     const res = await fetch("/api/comments");
//     const data = await res.json();
//     setComments(data);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
//       setProfilePic(file);
//     } else {
//       alert("Only JPG and PNG formats are allowed.");
//       e.target.value = null;
//     }
//   };

//   const handleRegister = async () => {
//     if (!username || !password || !profilePic) {
//       alert("All fields are required!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("username", username);
//     formData.append("password", password);
//     formData.append("avatar", profilePic);

//     const res = await fetch("/api/register", {
//       method: "POST",
//       body: formData,
//     });

//     if (res.ok) {
//       const newUser = await res.json();
//       setUser(newUser);
//       alert("User registered and logged in!");
//     } else {
//       alert("Registration failed.");
//     }
//     clearForm();
//   };

//   const handleLogin = async () => {
//     if (!username || !password) {
//       alert("Username and password required");
//       return;
//     }

//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     if (res.ok) {
//       const loginUser = await res.json();
//       setUser(loginUser);
//       alert("Login successful");
//     } else {
//       alert("Invalid login");
//     }
//     clearForm();
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setComments([]);
//   };

//   const handleAddComment = async () => {
//     if (!newComment.trim()) {
//       alert("Comment cannot be empty");
//       return;
//     }

//     const res = await fetch("/api/comments", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text: newComment, userId: user.id }),
//     });

//     if (res.ok) {
//       const newCmt = await res.json();
//       setComments([...comments, newCmt]);
//       setNewComment("");
//     }
//   };

//   const handleDeleteComment = async (id) => {
//     const res = await fetch(`/api/comments/${id}`, { method: "DELETE" });
//     if (res.ok) setComments(comments.filter((c) => c.id !== id));
//   };

//   const clearForm = () => {
//     setUsername("");
//     setPassword("");
//     setProfilePic(null);
//   };

//   return (
//     <div>
//       <h1>Please log in or register to join the comment section</h1>

//       {!user && (
//         <div>
//           <button onClick={() => setIsRegistering(true)}>Register</button>
//           <button onClick={() => setIsRegistering(false)}>Login</button>
//         </div>
//       )}

//       {isRegistering && !user && (
//         <div>
//           <h2>Register</h2>
//           <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//           <input type="file" accept="image/*" onChange={handleFileChange} />
//           <button onClick={handleRegister}>Register</button>
//         </div>
//       )}

//       {!isRegistering && !user && (
//         <div>
//           <h2>Login</h2>
//           <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       )}

//       {user && (
//         <div>
//           <h2>Welcome, {user.username}</h2>
//           <img src={user.avatar_url} alt="avatar" width="100" height="100" style={{ borderRadius: "50%" }} />
//           <button onClick={handleLogout}>Logout</button>

//           <div>
//             <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Write comment..." />
//             <button onClick={handleAddComment}>Add Comment</button>
//           </div>

//           <div>
//             <h3>Comments</h3>
//             {comments.map((comment) => (
//               <div key={comment.id} style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
//                 <div><strong>{comment.username}</strong>: {comment.text}</div>
//                 {comment.user_id === user.id && (
//                   <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

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
      const res = await fetch("/api/register", {
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
      const res = await fetch("/api/login", {
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
      const res = await fetch("/api/comments");
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
      const res = await fetch("/api/comments", {
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
      const res = await fetch(`/api/comments/${id}`, {
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
