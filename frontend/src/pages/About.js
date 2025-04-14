// pages/About.js
import React from "react";
import romance from "../assets/Romance.png"

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <div className="second-div">
        <div className="sub2-div">
          <h2> PRACTICUM OF ATTACK AND DEFENSE OF NETWORK SECURITY <br/>
                    R13921A20, Sam Lee, who likes to play baseball. <br/>
                    A rookie of attack and defense of network security. <br/>
                    Please leave my web alone, don't destroy it, thank you. <br/><br/>
                    Contact: Please don't.
          </h2>
        </div>
        <div className="sub2-div">
          <img src={romance} class = 'pic'alt="Self photo" />
        </div>
      </div>
    </div>
  );
}

////////////////////

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import romance from "../assets/Romance.png";

// export default function About() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     avatar: null,
//   });
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
//       setFormData({ ...formData, avatar: file });
//     } else {
//       alert("Only JPG/PNG images are allowed.");
//     }
//   };

//   const handleRegister = async () => {
//     const data = new FormData();
//     data.append("username", formData.username);
//     data.append("password", formData.password);
//     data.append("avatar", formData.avatar);

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/auth/register", data);
//       alert("Registration successful!");
//     } catch (err) {
//       console.error(err);
//       alert("Registration failed.");
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/auth/login", {
//         username: formData.username,
//         password: formData.password,
//       });
//       alert("Login successful!");
//       setLoggedInUser(response.data.user);
//     } catch (err) {
//       console.error(err);
//       alert("Login failed.");
//     }
//   };

//   const fetchComments = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:5000/comments");
//       setComments(response.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleAddComment = async () => {
//     if (newComment.trim() && loggedInUser) {
//       try {
//         const response = await axios.post("http://127.0.0.1:5000/comments", {
//           userId: loggedInUser._id,
//           text: newComment,
//           avatar: loggedInUser.avatar,
//         });
//         setComments([...comments, response.data.comment]);
//         setNewComment("");
//       } catch (err) {
//         console.error(err);
//         alert("Failed to add comment.");
//       }
//     } else {
//       alert("You must be logged in to comment.");
//     }
//   };

//   const handleDeleteComment = async (id) => {
//     try {
//       await axios.delete(`http://127.0.0.1:5000/comments/${id}`);
//       setComments(comments.filter((comment) => comment._id !== id));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete comment.");
//     }
//   };

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   return (
//     <div>
//       <h1>About</h1>
//       <div className="second-div">
//         <div className="sub2-div">
//           <h2>
//             PRACTICUM OF ATTACK AND DEFENSE OF NETWORK SECURITY <br />
//             R13921A20, Sam Lee, who likes to play baseball. <br />
//             A rookie of attack and defense of network security. <br />
//             Please leave my web alone, don't destroy it, thank you. <br />
//             <br />
//             Contact: Please don't.
//           </h2>
//         </div>
//         <div className="sub2-div">
//           <img src={romance} className="pic" alt="Self photo" />
//         </div>
//       </div>

//       {/* Registration & Login */}
//       <div>
//         <h2>Register or Login</h2>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleInputChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleInputChange}
//         />
//         <input type="file" name="avatar" onChange={handleFileChange} />
//         <button onClick={handleRegister}>Register</button>
//         <button onClick={handleLogin}>Login</button>
//       </div>

//       {/* Comments Section */}
//       <div>
//         <h2>留言板</h2>
//         <input
//           type="text"
//           placeholder="新增留言"
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//         />
//         <button onClick={handleAddComment}>留言</button>
//         <div className="comment-section">
//           {comments.map((comment) => (
//             <div key={comment._id} className="comment">
//               <img src={`http://127.0.0.1:5000/${comment.avatar}`} alt="頭貼" className="avatar" />
//               <p>{comment.text}</p>
//               <button onClick={() => handleDeleteComment(comment._id)}>刪除</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
