


let reset = document.querySelector("#reset_form")
reset.addEventListener("submit", function(){

let email = reset.querySelector("#email")
email = email.value;



firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    alert("Reset Password Link Send");
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  });


})