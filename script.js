function validateInput(input) {
  if (input.value.trim() === "") {
    showInvalidFeedback(input, "Please fill up this field.");
  } else {
    hideInvalidFeedback(input);
  }

  if (input.name === "fname" && input.value.trim().length < 4) {
    showInvalidFeedback(input, "First name should have at least 4 characters.");
  } else if (input.name === "lname" && input.value.trim().length < 1) {
    showInvalidFeedback(input, "Last name should have at least 1 character.");
  } else if (input.name === "email") {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(input.value.trim())) {
      showInvalidFeedback(input, "Please enter a valid email address.");
    }
  } else if (input.name === "tel" && input.value.trim().length !== 10) {
    showInvalidFeedback(input, "Mobile number should have 10 digits.");
  } else if (input.name === "password" && input.value.trim().length < 8) {
    showInvalidFeedback(input, "Password should have at least 8 characters.");
  }
}

function showInvalidFeedback(input, message) {
  input.classList.add("is-invalid");
  input.nextElementSibling.textContent = message;
  input.nextElementSibling.style.display = "block";
}

function hideInvalidFeedback(input) {
  input.classList.remove("is-invalid");
  input.nextElementSibling.style.display = "none";
}


function validateForm() {
  var inputs = document.forms["form"].getElementsByTagName("input");
  var isValid = true;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== "checkbox" && inputs[i].classList.contains("form-control")) {
      validateInput(inputs[i]);
      if (inputs[i].classList.contains("is-invalid")) {
        isValid = false;
      }
    }
  }
  if (isValid) {
    // window.location.href = "login.html"; // Redirect to success page
    document.write("success");
  }
  return isValid;
}


var inputs = document.forms["form"].getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
  if (inputs[i].type !== "checkbox" && inputs[i].classList.contains("form-control")) {
    inputs[i].addEventListener("keyup", function() {
      validateInput(this);
    });
    inputs[i].addEventListener("keydown", function() {
      validateInput(this);
    });
  }
}








