const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require("morgan");
const path = require("path")
// import db model
const Meme = require("./models/meme");

// create express app 
const app = express();
const PORT = process.env.PORT || 5000

// app.use(morgan("tiny"));
// connect to db
const dbURI = process.env.mongodbURI;
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then((result) => {
        console.log("MONGO CONNECTION OPEN!");
    })
    .catch((err) => {
        // res.send()
        console.log("OH NO!! ERROR!!", err);
    })

app.set("views", __dirname + "/views");
app.use(cors());

// middleware and static files
app.use(express.static("public")); // everything inside the folder "public" is made available to the browser statically
app.use(express.urlencoded({ extended: true })); // parse all url encoded data into objects
app.use(bodyParser.json()); // covert json to object

// Serve static files from react app
app.use(express.static(path.join(__dirname, "client/build")));

//start listening 
app.listen(PORT, () => {
    console.log(`APP LISTENING ON PORT ${PORT}`);
});

// routes
app.get("/", (req, res) => {
    res.redirect("/memes");
})

app.get("/memes", (req, res) => {
    Meme.find()
        .then(result => {
            const list = [];
            for (let i = Math.max(result.length - 100, 0); i < (result.length); i++) {
                const meme = result[i];
                const returnObj = {
                    id: meme._id,
                    name: meme.name,
                    url: meme.url,
                    caption: meme.caption
                };

                list.push(returnObj);
            }
            res.send(list);
        })
        .catch(err => {
            res.status(404).end();
            console.log(err);
        })
})

// handle post request 
app.post("/memes", (req, res) => {
    const meme = new Meme(req.body);
    if (!meme.name || !meme.url || !meme.caption) {
        res.status(400).end();
        return;
    }
    Meme.find({ name: meme.name, url: meme.url, caption: meme.caption })
        .then(result => {
            if (result.length == 0) {
                meme.save()
                    .then(result => {
                        res.send(JSON.stringify({ id: result.id })) // convert javascript objects or values to JSON strings
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
            else
                res.status(409).end();
        })
        .catch(err => {
            res.status(404).end();
            // console.log(err);
        })
})

// edit meme route
app.patch("/memes/:id", (req, res) => {
    const id = req.params.id;
    delete req.body.name;
    Meme.findByIdAndUpdate(id, req.body, {
        new: true
    })
        .then(result => {
            res.send();
        })
        .catch(err => {
            res.status(404).end();
        })
})

// find meme by id
app.get("/memes/:id", (req, res) => {
    const id = req.params.id;
    Meme.findById(id)
        .then(result => {
            if (result === null) {
                res.status(404).end(); // meme with specified if not found
            }
            else {
                res.send({ id: result._id, name: result.name, url: result.url, caption: result.caption });
            }
        })
        .catch(err => {
            res.status(404).end(); // error in retrieving data from server
        })
})

// route for delete meme
app.delete("/memes/:id", (req, res) => {
    const id = req.params.id; // get id of meme from url
    Meme.findByIdAndDelete(id)
        .then(result => {
            res.redirect("/memes");
        })
        .catch(err => {
            res.status(404).end();
        })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
})

app.use((req, res) => { // if any of the above cases are not valid for the requested endpoint 
    res.status(404).end();
});
