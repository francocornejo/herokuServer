const path = require('path')

function getLogin(req, res) {
  if (req.isAuthenticated()) {
    let user = req.user;
    console.log("user logueado");
    res.render("login-ok", {
      usuario: user.username,
      nombre: user.firstName,
      apellido: user.lastName,
      email: user.email,
    });
  } else {
      console.log("user NO logueado");
      res.sendFile(path.join(__dirname, "../views/login.html"));
  }
}

function getSignup(req, res) {
  res.sendFile(path.join(__dirname, "../views/register.html"));
}

function postRegister(req, res) {
    let user = req.user
    res.sendFile(path.join(__dirname, "../views/index.html"))
}

function postLogin(req, res) {
    let user = req.user
    res.sendFile(path.join(__dirname, "../views/index.html"))
}

function getFailsignup(req, res) {
  console.log("error en signup");
  res.render("signup-error", {});

}

function getFaillogin(req, res) {
  console.log("error en login");
  res.render("login-error", {});
}

function getLogout(req, res) {
  req.logout((e)=>{console.log(e)});
  res.sendFile(path.join(__dirname, "../views/index.html"))
}

module.exports = {
    postRegister,
    postLogin,
    getLogin,
    getFailsignup,
    getFaillogin,
    getLogout,
    getSignup
}