const express = require('express');
const port = 8000;
const app = express();
let users = [];
app.use(express.urlencoded());

//* Set View Engine
app.set('view engine', 'ejs');

//* Home Route
app.get('/', (req, res) => {
    res.render('./index', {
        users
    });
});

//* Add Data
app.post('/submit', (req, res) => {
    let { name, email, password, id } = req.body;
    if (!id) {
        users.push({ ...req.body, id: Date.now() });
    } else {
        users.map((user) => {
            if (user.id == id) {
                user.name = name;
                user.email = email;
                user.password = password;
            }
        })
        return res.redirect('/');
    }
    return res.redirect('/');
});

//* Delete Data 
app.get('/user/delete/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    return res.redirect('/');
})

//* Edit Data 
app.get('/user/edit/:id', (req, res) => {
    const { id } = req.params;
    let user = users.find((user) => user.id == id);
    return res.render('./editData', {
        user
    });
})


//! Server
app.listen(port, (err) => {
    if (err) {
        console.log(`Error`);
        return false;
    } else {
        console.log(`Server is running `);
        console.log(`http://127.0.0.1:${port}`);
    }
})