const { Thought, User } = require('../models')

const thoughtController = {
  // get all thoughts
  getThought(req, res) {
    Thought.find({}) 
      .select('-__v')
      .sort({ _id: -1 })
      .then((dbThoughtData) => {
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one thought
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .select('-__v')
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({
            message: "No user found with this id!",
          });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      }); 
  },

  // create thought
  createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id }},
          { new: true }
        )
      })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({
            message: "No user found with this id!",
          });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({
            message: "No user found with this id!",
          });
          return;
        }
        res.json(dbThoughtData)
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({
            message: "No user found with this id!",
          });
          return;
        }
        res.json(dbThoughtData)
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  addReaction() {

  },

  removeReaction() {

  }
}


module.exports = thoughtController