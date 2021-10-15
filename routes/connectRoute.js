module.exports = (app) => {
    app.post('/api/createGame', (req, res) => {
        console.log("creating game");
    });

    app.get('/api/joinGame/:id', (req, res) => {
        console.log(`Joining server ${req.params.id}`);
    });
}