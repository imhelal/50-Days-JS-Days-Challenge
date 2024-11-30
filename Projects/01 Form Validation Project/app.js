const form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

// Check required fields
function checkRequiredFields(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value === "") {
      showError(input, `${getFieldName(input)} Cannot be empty.`);
    } else {
      showSuccess(input);
    }
  });
}

// Show error
function showError(input, message) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  formControl.querySelector("small").innerHTML = message;
}

// Show success
function showSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Get the field name
function getFieldName(input) {
  return input.id[0].toUpperCase() + input.id.slice(1);
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be more than ${min} charecters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} charecters.`
    );
  } else {
    showSuccess(input);
  }
}

// Password matchs check
function passwordMatchsCheck(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match.");
  }
}

// Validate email
function checkEmail(input) {
  // regular expression // regex
  const emailCheckReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailCheckReg.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, `${getFieldName(input)} is invalid.`);
  }
}

// Event listners
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reloading

  // check required
  checkRequiredFields([username, email, password, password2]);

  //check length
  checkLength(username, 3, 8);
  checkLength(password, 6, 25);

  //Passwords match check
  passwordMatchsCheck(password, password2);

  // check email
  checkEmail(email);
});
