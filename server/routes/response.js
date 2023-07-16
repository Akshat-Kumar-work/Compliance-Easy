const express = require("express");
const router = express.Router()

const {saveAndSend} = require("../controllers/Response")
const{test } = require("../controllers/home")

router.post("/ResponseData",saveAndSend);
router.get("/test",test)



module.exports = router