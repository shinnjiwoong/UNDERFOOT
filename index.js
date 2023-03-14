const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"))

app.get('/', (req, res) => {
  res.render('mainPage', {})
})
app.get('/merch', (req, res) => {
  res.render('merchPage', {})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})