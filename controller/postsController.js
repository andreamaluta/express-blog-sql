const post = require('../data/postsList');

function index(req, res) {

    // callmyfunction();

    res.json(post);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const postFound = post.find(post => post.id === id);
    res.json(postFound);
}

function store(req, res) {
    const newId = post[post.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    post.push(newPost);



    res.status(201);
    res.json(newPost);




}

function update(req, res) {
    const id = parseInt(req.params.id);
    const findPost = post.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            error: 'Not FOund',
            message: 'Post non trovato'
        })
    }

    findPost.title = req.body.title;
    findPost.content = req.body.content;
    findPost.image = req.body.image;
    findPost.tags = req.body.tags;

    res.json(findPost);

}

function modify(req, res) {
    res.send('Modifica parziale del post: ' + req.params.id);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const postFound = post.find(post => post.id === id);
    post.splice(post.indexOf(postFound), 1);
    console.log(post);

    res.sendStatus(204);

}

module.exports = { index, show, store, update, modify, destroy }