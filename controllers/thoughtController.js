const { User, Thought } = require("../models");


module.exports = {
//get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
// get a single thought by id
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },

// create a thought
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
  },

  //update a thought by id
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },

//delete a thought by id
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        res.status(404).json({ message: "No thought with that ID " });
      }

      const user = await User.findOneAndUpdate(
        { username: thought.username },
        { $pull: { thoughts: req.params.thoughtId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "Thought deleted but found no user with that ID" });
      }

      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },

//add a reaction to a thought by id
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought found with that ID " });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
      console.error(err);
    }
  },

//delete a reaction to a thought by id
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: "No thought with that ID " });
      }

      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  }

}