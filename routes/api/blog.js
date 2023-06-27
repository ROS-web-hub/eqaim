const express = require('express');
const router = express.Router();
const config = require('config');

const Blog = require('../../models/Blog');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/list', async (req, res) => {
  try {
    const user = await Blog.find();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/create', async (req, res) => {
  try {
    const { content } = req.body;
    let blog = new Blog({
      content: content

    });
    const result = await blog.save();
    console.log("%c Line:28 🌶 result", "color:#ed9ec7", result);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/viewBlog', async (req, res) => {
  try {
    const id = req.query.id;
    const data = await Blog.findById(id);
    res.json(data);

  } catch (error) {

  }
})

module.exports = router;
