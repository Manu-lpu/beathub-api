const getAllPosts = (req, res) => {
  res.json({
    success: true,
    message: "All posts fetched successfully"
  });
};

module.exports = { getAllPosts };
