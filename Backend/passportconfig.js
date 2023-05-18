// const User = require("./models/user");
// const bcrypt = require("bcryptjs");
// const LocalStrategy = require("passport-local");

// module.exports = function  (passport) {
//   passport.use(
//     new localStrategy(async (name,password, done) => {
//     const user=await User.model.findOne({name,password})
//     console.log(user);
//     })
//   );

//   passport.serializeUser((user, cb) => {
//     cb(null, user.id);
//   });
//   passport.deserializeUser((id, cb) => {
//     User.model.findById(id , (err, user) => {
//       const userInformation = {
//         name: user.name,
//       };
//       cb(err, userInformation);
//     });
//   });
// };
