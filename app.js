const express = require('express');

const errorsHandler = require("./middleware/errorsHandler");
const notFound = require("./middleware/notFound");

const app = express();

const port = 3000;

app.use(express.json());

const postsRouter = require('./routers/posts.js');
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log('server aperto sulla porta ' + port);
})