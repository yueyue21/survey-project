const mongoose = require("mongoose");
const { Schema } = mongoose;
//const Schema = mongoose.Schema; -- equivlent to up line
const userSchema = new Schema({
  googleId: String,
});
//then tell mongoose to create a new collection 'users'
//mongoose does not over write a schema, it will create if the schema does not exist
mongoose.model("users", userSchema);
