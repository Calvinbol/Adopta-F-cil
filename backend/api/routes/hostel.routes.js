const route = require('express').Router()

const {
  createHostel,
  getHostels,
  getHostelById,
  updateHostel,
  deleteHostel,
} = require("../controllers/hostel.controller");

router.get("/", getHostels);
router.get("/:id", getHostelById);
router.post("/", createHostel);
router.put("/:id", updateHostel);
router.delete("/:id", deleteHostel);

module.exports = router