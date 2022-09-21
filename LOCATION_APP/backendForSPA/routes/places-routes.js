const { Router } = require("express");
const { check } = require("express-validator");
const placesControllers = require("../controllers/places-controller");

const router = Router();

router.get("/:pid", placesControllers.getPlaceById);
router.get("/user/:uid", placesControllers.getPlacesByUserId);
router.post(
    "/", 
    [
        check('title').not().isEmpty(),
        check('description').isLength({ min: 5 }),
        check('address').not().isEmpty()
    ], 
    placesControllers.postPlace
);
router.patch(
    "/:pid", 
    [
        check('title').not().isEmpty(),
        check('description').isLength({ min: 5 })
    ], 
    placesControllers.patchPlaceById
);
router.delete("/:pid", placesControllers.deletePlaceById);

module.exports = router;
