const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Rent is so expensive",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "That should be authorized by the parents prior the goverment teaching them about ideologies",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "I love cooking and I am 33!!! ",
    post_id: 4,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;