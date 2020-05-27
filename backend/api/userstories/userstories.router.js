// endpoints

// get all the userstories from the DB
app.get('/userstory', function (req, res) {
    Userstory.find({}, function (err, resp) {
        if (resp.length === 0) {
            res.send('The userstory database is empty.')
        } else {
            res.send(resp);
        }
    });
});