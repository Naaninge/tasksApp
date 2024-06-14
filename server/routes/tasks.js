const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
  registerUser,
  loginUser,
} = require("../controllers.js/task");




router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);
router.route("/login").post(registerUser)
router.route("/register").post(loginUser);


module.exports = router