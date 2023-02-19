const emailInput = document.querySelector("input").value;
const errorMsg = document.querySelector("small");
function formValidation() {
  errorMsg.innerHTML = "Please provide valid email address";
}
