const express = require('express');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('./index');
});
app.get('/about', (req, res) => {
    res.render('./about');
})
app.listen(port, (err) => {
    if (err) {
        console.log(`Error`);
        return false;
    } else {
        console.log(`Server is running `);
        console.log(`http://127.0.0.1:${port}`);
    }
})