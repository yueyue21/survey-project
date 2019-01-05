const express = require('express');
const mongoose = require('mongoose');
//tell passport to keep track on user sessions or user authentication state by
// using cookies
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
/*const passportConfig = */ require("./services/passport");
//since we actually not assigning any thing to passportConfig
//We just need passport.js file excuted
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);


const app = express(); // single express app defined
app.use(
  cookieSession({
    //this cookie will  expire after 30 days. to million seconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]/* we can provid a list of cookieKeys with different level security
                          it will randomly use one*/
  })
);
//tell passport use session
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);// functionally import the file.
const PORT = process.env.PORT || 5000;

app.listen(PORT);

//localhost:5000/greeting
