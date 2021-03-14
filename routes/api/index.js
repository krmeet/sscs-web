const { Router } = require("express")

const path = "/api"
const router = Router()
router.get("/",(req,res)=>{
  res.send("hola")
})

module.exports = {
  path,
  router
}