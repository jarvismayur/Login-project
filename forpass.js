
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

let reset = document.querySelector("#reset")
reset.addEventListener("submit", function(){

let email = document.querySelector("#resetEmail")


const auth = getAuth();
sendPasswordResetEmail(auth, email.value)
  .then(() => {
    alert("Reset Password Link Send")
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  });


})