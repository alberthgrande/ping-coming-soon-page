const emailInput = document.querySelector("input");
const errorMsg = document.querySelector("small");

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function formValidation() {
  if (emailInput.value === "") {
    errorMsg.innerHTML = `Email cannot be empty`;
    emailInput.style.borderColor = "hsla(0, 100%, 74%, 0.7)";
    emailInput.style.borderWidth = "2px";
    emailInput.style.borderStyle = "solid";
  } else if (emailInput.value.match(mailformat)) {
    errorMsg.style.display = `none`;
    emailInput.style.borderColor = "hsla(154, 59%, 51%,0.7)";
    emailInput.style.borderWidth = "2px";
    emailInput.style.borderStyle = "solid";
  } else {
    errorMsg.innerHTML = `Please provide valid email address`;
    emailInput.style.borderColor = "hsla(0, 100%, 74%, 0.7)";
    emailInput.style.borderWidth = "2px";
    emailInput.style.borderStyle = "solid";
  }
}
