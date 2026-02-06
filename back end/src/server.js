const express = require("express");
const postsRoutes = require("./routes/posts.routes");

const app = express();

app.use("/api/v1/posts", postsRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
