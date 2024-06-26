const router = require('express').Router()
const { checkAuth } = require("../middlewares/auth.middlewares");

const {
  getHostels,
  getHostelById,
  getMyProfileByToken,
  createHostel,
  updateHostel,
  deleteHostel,
} = require("../controllers/hostel.controller");

router.get("/", getHostels);
router.get("/myprofile", checkAuth, getMyProfileByToken);
router.get("/:id", getHostelById);
router.post("/", createHostel);
router.put("/:id", updateHostel);
router.delete("/:id", deleteHostel);


module.exports = router