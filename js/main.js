var logins = [
  {
    username: "enrique",
    password: "novoa16"
  },
  {
    username: "christopher",
    password: "payne12"
  },
  {
    username: "dylan",
    password: "iamdylan"
  }
];

var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var login = document.getElementById("login");

var div = document.createElement("div");
div.className = "notification";
var p = document.createElement("p");
var loginpage = document.getElementById("login-page");

div.appendChild(p);
loginpage.appendChild(div);

var valid = false;

login.addEventListener("click", function() {

  for (var x = 0; x < logins.length; x++) {
    if (usernameInput.value == logins[x].username && passwordInput.value == logins[x].password) {
      valid = true;
      break;
    }
  }

  if (valid) {
    console.log("Yes!");
    p.textContent = "Welcome to Codify Academy, " + logins[x].username + "!";
    p.className = "green";

  } else {
    console.log("NO!!!");
    p.textContent = "Username or password don't match!";
    p.className = "red";
  }

});


//
