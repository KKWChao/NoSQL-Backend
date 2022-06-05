const { User } = require("../models");

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})

      .then((dbUserData) => {
        res.json(dbUserData);
      })

      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one user
  getUserById({ params }, res) {
    User.findById({ _id: params.id })

      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({
            message: "No user found with this id!",
          });
          return;
        }
        res.json(dbUserData);
      })

      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = userController;