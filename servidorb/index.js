const express = require("express");
const port = process.env.PORT || 3001;
const router = require('./router')
const app = express();

app.use(express.json());
app.use('/api', router);

app.get("/", (req, res) => {res.send("Servidor B")})

app.listen(port, () => {console.log("Servidor B")})