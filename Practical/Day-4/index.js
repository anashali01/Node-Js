import express from "express";
import dotenv from "dotenv";
import { db } from "./config/db.js";
import { User } from "./models/user.modal.js";
import bodyParser from "body-parser";

let viewData = [];

dotenv.config();

const app = express();
const port = process.env.PORT || 8101;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

//! Main Page Render Route 
app.get('/', (req, res) => {
    return res.render('index');
})

//! Tables Page Render Route 
app.get('/tables', async(req, res) => {
    try {
        let data = await User.find({})

        return res.render('pages/tables' , {
            users : data
        });
    } catch (error) {
        
    }
})

//! Form basic Page Render Route 
app.get('/form-basic', (req, res) => {
    return res.render('pages/form-basic');
})

//! Login Page Render Route 
app.get('/login', (req, res) => {
    return res.render('pages/login');
})

//! Login Page Data Transfer Route
app.post('/login', async (req, res) => {
    try {
        let rs = await fetch('http://127.0.0.1:6100/user/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body),
        })

        let data = await rs.json();

        if(data.success){
            return res.redirect('/');
        }else{
            return res.redirect(req.get('referrer' || "/"))
        }
    } catch (error) {
        console.log(error.message);
        return res.json(req.get('referrer' || "/"))
    }
})

//! Login Page API Route
app.post('/user/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });

        if (user) {
            if (user.password == password) {
                return res.json({
                    message: "User Found Successfully !",
                    success: true,
                    data: user,
                })
            } else {
                return res.json({ message: "Password Doesn't Match!", success: false });
            }
        } else {
            return res.json({ message: "User Not Found!!", success: false });
        }
    } catch (error) {
        return res.json({ message: error.message, success: false });
    }


})
//! Signup Page Render Route 
app.get('/signup', (req, res) => {
    return res.render('pages/signup');
})

//! Get Data From Form Route 
app.post('/signup', (req, res) => {
    console.log("data from signup", req.body);
    fetch('http://127.0.0.1:6100/user/create', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
    })
        .then((rs) => {
            return rs.json()
        })
        .then((data) => {
            console.log(data);
            return res.redirect('/login')
        })
        .catch((error) => {
            console.log(`Error ${error.message}`);
            res.redirect('/')
        })
})
//! Create User Route
app.post('/user/create', (req, res) => {
    User.create(req.body)
        .then((data) => {
            return res.json(data);
        })
        .catch((error) => {
            return res.json(error.message);
        })
});

//! GetallUser Route 
app.get('/user/getAllUser', (req, res) => {
    User.find({})
        .then((data) => {
            return res.json(data)
        })
        .catch((error) => {
            return res.json({ message: error.message });
        })
})

//! Delete User Route
app.get('/user/delete/:id', (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id)
        .then((data) => {
            return res.json({ message: "User Deleted!", data })
        })
        .catch((error) => {
            return res.json({ message: error.message })
        })
})

//! Update User Route 
app.post('/user/update/:id', (req, res) => {
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body)
        .then((data) => {
            return res.json({ message: "User Updated!" })
        })
        .catch((error) => {
            return res.json({ message: error.message })
        })
})
//! Error Route
app.listen(port, (err) => {
    if (!err) {
        console.log(`Server is running on http://127.0.0.1:${port}`);
    } else {
        console.log(`Error`);
    }
}) 