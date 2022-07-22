let email_store;
let password_store;

let user = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("sign_up").addEventListener("click", () => {
  email_store = document.getElementById("signup_email").value;
  // console.log(email_store)
  document.getElementById("signup_top").style.display = "none";
  document.getElementById("password_container").style.display = "block";
});

document.getElementById("create_account").addEventListener("click", () => {
  let confirm_password = document.getElementById("confirm").value;
  let signup_password = document.getElementById("signup_password").value;
  if (confirm_password === signup_password) {
    password_store = confirm_password;
    signedUp();
  } else {
    alert("Please enter same password in both the input feilds");
  }
});

document.getElementById("back").addEventListener("click", () => {
  document.getElementById("signup_top").style.display = "block";
  document.getElementById("password_container").style.display = "none";
});

let showdata = () => {
  console.log(email_store);
  console.log(password_store);
};

let signedUp = () => {
  let email = email_store;
  let password = password_store;

  let s1 = new AddUser(name);
  s1.signUp(email, password);
};

class AddUser {
  constructor(email, password) {
    // this.name = name;
    this.email = email;
    this.password = password;
  }

  signUp(email, password) {
    let validate = false;
    validate = this.validateEmail(email);
    if (validate) {
      this.email = email;
      this.password = password;

      user.push(this);
      alert("Signup Successfull");
      localStorage.setItem("users", JSON.stringify(user));
      window.location.reload();
    } else {
      alert("User Already Exist");
    }
  }

  validateEmail(email) {
    if (user.length == 0) {
      return true;
    } else {
      let check = false;
      user.forEach(function (ele) {
        if (ele.email == email) {
          check = false;
        } else {
          check = true;
        }
      });
      return check;
    }
  }
}
