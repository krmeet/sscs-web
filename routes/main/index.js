const { Router } = require("express")

const path = "/"
const router = Router()
router.get("/",(req,res)=>{
  res.send(":)")
})

module.exports = {
  path,
  router
}