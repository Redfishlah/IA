// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const authRoutes = require('./routes/auth');
// const commentRoutes = require('./routes/comments');

// app.use(cors());
// app.use(express.json());

// app.use('/api', authRoutes);
// app.use('/api/comments', commentRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

///////////////////////

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
const commentRoutes = require("./routes/comments");

app.use("/api", authRoutes);
app.use("/api/comments", commentRoutes);

// Serve front-end if built (optional)
// app.use(express.static(path.join(__dirname, "client", "build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
