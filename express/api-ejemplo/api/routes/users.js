const express = require('express');
const router = express.Router();

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: 'Reimu', lastName: 'Hakurei' },
    { firstName: 'Marisa', lastName: 'Kirisame' },
    { firstName: 'Sanae', lastName: 'Kochiya' },
    { firstName: 'Sakuya', lastName: 'Izayoi' },
    { firstName: 'Momiji', lastName: 'Inubashiri' },
];

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    try {
        const { firstName } = req.body;
        console.log({ firstName });
        // req.body will contain the form data from Postman or from React
        console.log(req.body);
        firstName.toUpperCase();
        // we can push it into the users array for now...
        // later on this will be inserted into a database
        users.push(req.body);
        // we always need to respond with something
        res.json({ status: 'ok' });
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
router.get('/:id/:id2', (req, res) => {
    const { id, id2 } = req.params;
    console.table({ id, id2 });

    // assuming this id is the index of the users array we could return one user this way
    res.json(users[req.params.id]);
});

router.put('/:id', (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json({ status: 'ok' });
});

router.delete('/:id', (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json({ status: 'ok' });
});

module.exports = router;