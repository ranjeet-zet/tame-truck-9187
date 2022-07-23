let logUser = JSON.parse(localStorage.getItem("users"));
let flag = JSON.parse(localStorage.getItem("flag")) || false;

class LoginUser {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  userValidation() {
    console.log("hello");
    let validate = false;
    validate =
      this.validateEmail() &&
      this.validatePassword() &&
      this.validateEmailPassword();
    console.log(validate);
    if (validate) {
      alert("Login Successful");
      window.location = "../Pricing/team.html";
    } else if (
      this.validateEmail() == false &&
      this.validatePassword() == true
    ) {
      alert("User Doesnot exist");
    } else if (
      this.validatePassword() === false &&
      this.validateEmail() == true
    ) {
      alert("Incorrect Password");
    } else {
      alert("Wrong Credentials");
    }
  }

  // Email validation
  validateEmail() {
    let checkEmail = false;
    logUser.forEach((ele) => {
      if (this.email === ele.email) {
        checkEmail = true;
      }
    });
    return checkEmail;
    // console.log(checkEmail);
  }

  // Password validation
  validatePassword() {
    let checkPassword = false;
    logUser.forEach((ele) => {
      if (this.password === ele.password) {
        checkPassword = true;
      }
    });
    return checkPassword;
    // console.log(checkPassword);
  }

  // both email and password validation
  validateEmailPassword() {
    let checkEmailPassword = false;
    logUser.forEach((ele) => {
      if (this.email === ele.email && this.password === ele.password) {
        checkEmailPassword = true;
        flag = true;

        // console.log('hello');
      }
    });
    localStorage.setItem("flag", JSON.stringify(flag));
    return checkEmailPassword;
  }
}

let login_email_store;
let login_password_store;

document.getElementById("log_in").addEventListener("click", () => {
  login_email_store = document.getElementById("email").value;
  document.getElementById("myGmail").innerText = login_email_store;
  // console.log(login_email_store)
  document.getElementById("form").style.display = "none";
  document.getElementById("password_login_container").style.display = "block";
});

document.getElementById("login_account").addEventListener("click", () => {
  login_password_store = document.getElementById("login_password").value;

  loggedInUser();
});

// let check = () => {
let loggedInUser = () => {
  let email = login_email_store;
  let password = login_password_store;

  let l1 = new LoginUser(email, password);
  l1.userValidation();
};
//}

document.getElementById("login_back").addEventListener("click", () => {
  document.getElementById("form").style.display = "block";
  document.getElementById("password_login_container").style.display = "none";
});
