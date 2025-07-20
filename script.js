function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

function saveUser(username, password) {
  const users = getUsers();
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
}

function register() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;
  const error = document.getElementById("register-error");

  const users = getUsers();
  const exists = users.find(user => user.username === username);

  if (exists) {
    error.classList.remove("hidden");
  } else {
    saveUser(username, password);
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
  }
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const error = document.getElementById("login-error");

  const users = getUsers();
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
  } else {
    error.classList.remove("hidden");
  }
}