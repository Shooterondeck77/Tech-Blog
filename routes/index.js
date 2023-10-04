const router = require('express').Router();
const userRoutes = require('./api/user-routes');
const postRoutes = require('./api/post-routes');
const commentRoutes = require('./api/comment-routes');
const homeRoutes = require("./homeRoutes")

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/', homeRoutes)


router.get('/login', (req, res) => {
    console.log("Hit Login Route");

    res.render('login');
});

router.get('/dashboard', (req, res) => {
    console.log("Hit Dashboard Route");
    const user = "Bill"
    const num = 52
    const usernames = ["Bill", "Marco", "John", "Sarah"]

    res.render('dashboard', { data: user, dataNum: num, arr: usernames });
});

module.exports = router;