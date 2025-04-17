import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const getUserTasks = async (req,res) => {
    const tasks = await Task.find({user : req.user.id}).populate('user');
    if (!tasks) return res.status(404).json({ message: "Tasks not found" });    
    res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, date,user } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
    user : req.user.id
  });

  const taskSaved = await newTask.save();
  res.json(taskSaved);
};

export const getTask = async (req, res) => {
    
    const task = await Task.findById(req.params.id).populate('user');
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
};

export const updateTask = async (req, res) => {
    const updateTask = await Task.findByIdAndUpdate(req.params.id,req.body,{
        new : true
    })
    if (!updateTask) return res.status(404).json({ message: "Task not found" });
    res.json(updateTask);
};

export const deleteTask = async (req, res) => {
    const deleteTask = await Task.findByIdAndDelete(req.params.id)
    if (!deleteTask) return res.status(404).json({ message: "Task not found" });
    return res.sendStatus(204);
};
