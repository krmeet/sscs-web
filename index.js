require("dotenv").config()
const port = process.env.PORT

const fs = require("fs")
const path = require("path")
const express = require("express")
const app = express()

app.use(express.static("./static"))

const routes = fs.readdirSync("./routes")
routes.forEach(routepath => {
  var route = require(`./routes/${routepath}`)
  app.use(route.path,route.router)
})

app.listen(port, ()=>{
  console.log(`express running on ${port}`)
})