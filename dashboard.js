 

 // Get form element
 var form = document.querySelector("#workLogForm");

 // Handle form submission

 form.addEventListener("submit", function(event) {
   event.preventDefault();
   var date = form.date.value;
   var task = form.task.value;
   var time = form.time.value;

   // Save work log to Firebase Realtime Database
   var userId = firebase.auth().currentUser.uid;
   var workLogRef = firebase.database().ref("work-logs/" + userId);
   workLogRef.push({ //child() , set()
     date: date,
     task: task,
     time: time
   }, function(error) {
        if (error) {
          console.error("Error saving work log: " + error.message);
          // TODO: Display error message to user
        } else {
          console.log("Work log saved successfully");
          // TODO: Display success message to user
          form.reset();
        }
      });
    });

    // Retrival Code
    setTimeout(function() {
    var userId = firebase.auth().currentUser.uid;
    // Get a reference to the worklogs node in the database
    var worklogsRef = firebase.database().ref("work-logs/" + userId);

    // Get a reference to the worklogs list element in the HTML
    var worklogsList = document.querySelector("#worklogs-list");

    // Listen for value changes in the worklogs node
    worklogsRef.on("value", function(snapshot) {
      // Clear the worklogs list element
      worklogsList.innerHTML = "";
      

      // Loop through each child of the worklogs node
      snapshot.forEach(function(childSnapshot) {
        // Get the worklog data
        console.log(childSnapshot)
        var worklogData = childSnapshot.val();

        // Create a new list item element for the worklog
        var listItem = document.createElement("li");

        // Set the text content of the list item to the worklog data
        listItem.textContent = worklogData.date + " - " + worklogData.time +" - "+ worklogData.task;

        // Add the list item to the worklogs list element
        worklogsList.appendChild(listItem);
      });
    });

}, 60000);


     // Get logout button element
     var logoutButton = document.querySelector("#logout-button");


     // Handle logout button click
     logoutButton.addEventListener("click", function() {
       firebase.auth().signOut().then(function() {
         // Sign-out successful.
         console.log("User signed out successfully");
         window.location.href = "index.html";
         // TODO: Redirect user to login page or other appropriate page
       }).catch(function(error) {
         // An error happened.
         console.error("Error signing out: " + error.message);
         // TODO: Display error message to user
       });
     });

     firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
         
        } else {
          // No user is signed in.
          console.log("No user is currently logged in");
          // TODO: Display login form or other appropriate content
        }
      });