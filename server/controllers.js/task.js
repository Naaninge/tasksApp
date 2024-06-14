const taskSchema = require("../models/task");
const userSchema = require("../models/users")

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskSchema.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send("Something, went wrong.");
  }
};

const getSingleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskSchema.findOne({ _id: id });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
};

const createTask = async (req, res) => {
  const { body } = req;
  try {
    const task = await taskSchema.create(body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send("Something,went wrong");
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskSchema.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send("Something,went wrong.");
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskSchema.findOneAndDelete({ _id: id });
    res.status(200).json({ deleted: task });
  } catch (error) {
    res.status(500).send("Something, went wrong.");
  }
};
const loginUser = async (req, res) => {
  const {email,password} = req.body
 try {
  const user = await userSchema.findOne({email:email})
   if(user){
    if(user.password === password){
      res.status(200).json("success")
    }else{
      res.json("the password is incorrect")
    }
   }
 } catch (error) {
  res.status(500).json("user does not exit!")
 }
};
const registerUser = async(req, res) => {
   
  try {
    const user = await userSchema.create(req.body)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
  loginUser,
  registerUser,
};
