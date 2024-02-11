<<<<<<< HEAD
const express = require("express");
const router = express.Router()

const {saveAndSend} = require("../controllers/Response")
const{test } = require("../controllers/home")

router.post("/ResponseData",saveAndSend);
router.get("/test",test)



=======
const express = require("express");
const router = express.Router()

const {saveAndSend} = require("../controllers/Response")
const{test } = require("../controllers/home")

router.post("/ResponseData",saveAndSend);
router.get("/test",test)



>>>>>>> 139dc3ee2dde2e6f01b5a9d249ed80e47b03803e
module.exports = router