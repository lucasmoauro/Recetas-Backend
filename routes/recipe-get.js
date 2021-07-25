
const { Router } = require("express");
const {
    recipeGet
} = require("../controllers");


const router = Router();


router.get("/:id", recipeGet);


module.exports = router;
