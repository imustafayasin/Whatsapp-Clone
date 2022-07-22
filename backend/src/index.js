const express = require("express");
const app = express();

app.get('/', (req, res, next) => {
    res.json({ "message": "hi there" })
})


app.listen(3000, () => console.log("runned on http://localhost:3000"));