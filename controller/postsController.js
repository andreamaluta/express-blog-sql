const connection = require('../data/db.js')

function index(req, res) {

    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }
        console.log(results);
        res.json(results);
    });

}

function show(req, res) {

    const id = req.params.id;

    const sql = `SELECT * FROM posts WHERE id = ?`;

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "database query failed: " + err });
        }

        res.json(results);
    })
}

function store(req, res) {

    res.json('Aggiunta di un post');
}

function update(req, res) {


    res.json('ricerca di un post');

}

function modify(req, res) {
    res.send('Modifica parziale del post: ' + req.params.id);
}

function destroy(req, res) {

    const { id } = req.params;

    connection.query('DELETE FROM posts WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: 'failed to delete post' });
        res.sendStatus(204)
    })

}

module.exports = { index, show, store, update, modify, destroy }