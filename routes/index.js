const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET user Signup page. */
router.get('/signup', userController.getRegister)

/* POST user Signup page. */
router.post('/signup', userController.handleRegister)

/* GET user Login page. */
router.get('/login', userController.getLogin)

/* POST user Login page. */
router.post('/login', userController.handleLogin)

/* GET user Login page. */
router.get('/posts',userController.getAllPosts)

/* GET user Login page. */
router.post('/posts',userController.createPost)


module.exports = router;
