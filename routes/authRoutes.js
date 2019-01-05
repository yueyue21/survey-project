const passport = require("passport"); //this require to the original npm passport module

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get('/api/logout',(req,res) => {
    req.logout();
    res.send(req.user);// this user will be distoried once logout excuted
  });

  app.get('/api/current_user', (req,res) => {
    res.send(req.session);
    //res.send(req.user);
  });


};
