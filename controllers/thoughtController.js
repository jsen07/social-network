const { User, Thought } = require("../models");


module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: thought._id } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'Thought created, but found no user with that username' });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  }

}