const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      commentBody: req.body.commentBody,
      post_id: req.body.post_id,
      user_id: req.session.userId
    })

    res.status(200).json(newComment);
  } catch (err) {
    console.log("Error: ", err);
    res.status(400).json(err);
  }
});

module.exports = router;
