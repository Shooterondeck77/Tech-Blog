const { Post } = require("../models");

const postData = [
  {
    title: "Downtown life",
    post_text:
      "Is it really worth it to live downtown?",
    user_id: 1,
  },
  {
    title: "Do you think you can learn how to cook after you are 30 years old?",
    post_text: "Study shows that men are not that skilled cooking after they are 30th years old if they haven't practiced ever",
    user_id: 1,
  },
  {
    title: "Schools: new programs about LGBTQ",
    post_text:
      "In 2019, Ontarios government released a revised elementary Health and Physical Education (HPE) curriculum including new and enhanced learning related to sexual orientation in Grades 5 and 7, in addition to the existing learning in Grades 6 and 8. ",
    user_id: 4,
  },
  {
    title: "Does my vote count?",
    post_text:
      "People have died defending this right. Dont take it for granted! Voting is more than just electing a candidate, its choosing the right policies and people who have your best interests in mind when making decisions that will affect our community, state and nation. When you vote, you are taking an active role in deciding issues regarding health care, immigration, equal opportunity, voting rights, infrastructure, jobs, education, social security, neighborhood safety, taxes, etc.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;