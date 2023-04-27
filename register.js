
    
  
    // Reference messages collection
    //var messagesRef = firebase.database().ref('messages');
    
    // Listen for form submit
    //document.getElementById('contactForm').addEventListener('submit', submitForm);
    
  
    // Get form elements
    var form = document.querySelector("form");
    var emailInput = form.querySelector("#email");
    var passwordInput = form.querySelector("#password");
    var first_nameInput = form.querySelector('#first_name');
    var last_nameInput = form.querySelector('#last_name');
    


    // Handle form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      var email = emailInput.value;
      var password = passwordInput.value;
      var first_name = first_nameInput.value;
      var last_name = last_nameInput.value;


 // this is the fun of ceating a fun for firebase and creating the profile database
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
         // Signed in
         alert("Register Sucessfully")
         const user = userCredential.user;
         const userRef = firebase.database().ref().child("users").child(user.uid);
         userRef.set({
            email: user.email,
            first_name: user.displayfirst_name,
            last_name: user.displaylast_name,
            password: user.password       
         });
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorCode, errorMessage);
      });
   

    });


    
    
   

    

  