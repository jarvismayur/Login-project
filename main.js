
    
  
    // Reference messages collection
    //var messagesRef = firebase.database().ref('messages');
    
    // Listen for form submit
    //document.getElementById('contactForm').addEventListener('submit', submitForm);
    
  
    // Get form elements
    var form = document.querySelector("form");
    var emailInput = form.querySelector("#email");
    var passwordInput = form.querySelector("#password");

    // Handle form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      var email = emailInput.value;
      var password = passwordInput.value;

      // Sign in with email and password
      firebase.auth().signInWithEmailAndPassword(email, password) // createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
          // User signed in successfully
    

          window.location.href = "dashboard.html";
          // TODO: Redirect to a secure page
        })
        .catch(function(error) {
          // An error occurred
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error("Error signing in: " + errorMessage);
          // TODO: Display error message to user
        });

    });

  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //  .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     const userRef = firebase.database().ref().child("users").child(user.uid);
  //     userRef.set({
  //        email: user.email,
  //        name: user.displayName,
  //        photoURL: user.photoURL
  //     });
  //  })
  //  .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode, errorMessage);
  //  });

    
   

    

  