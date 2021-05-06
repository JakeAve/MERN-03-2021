require('dotenv').config();
const express = require('express');
const User = require('./models/User');
const PORT = process.env.PORT;

const app = express();

require('./db/connectMongo')()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/api/user', async (req, res) => {
    try {
        const { name, dob, correo, luckyNumber } = req.body;
        console.log({ name, dob, correo })

        const yaExisteUsuario = await User.findOne({ correo }).exec()

        if (yaExisteUsuario) return res.sendStatus(400)

        const user = new User({ name, dob, correo, luckyNumber })
        await user.save()
        res.json(user)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
});


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
