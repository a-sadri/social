const Post = require('../models/post');

exports.getPost = (req, res) => {
  res.json({
    post: 'this is a sample post',
  });
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);

  post.save((err, result) => {
    if (err) {
      res.status(400).json({
        Error: err,
      });
    }

    return res.status(201).json({
      Post: result,
    });
  });
};
