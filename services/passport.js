//http://console.developer.google.com
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  //get current logged in user serialized, with the pk id in our database
  done(null, user.id);
});

passport.deserializeUser((/*the property name is "id"*/ id, done) => {
  //search all users see if we can fine the users
  User.findById(id).then(user => {
    done(null, user); // pass out the user
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("access token", accessToken);
      // console.log("refresh token", refreshToken);
      // console.log("profile:", profile);
      // console.log("profile:", profile.id);
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        //we already have a record ewith the given profile ID
        return done(null /*error message*/, existingUser);
      }
      // we don't have a user record
      const user = await new User({ googleId: profile.id }).save();
      done(null /*error message*/, user);
    }
  )
);
