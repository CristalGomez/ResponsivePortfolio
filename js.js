  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB8KOqumJIi0sijeajjnzT8IM7VFoh6A4I",
    authDomain: "portfoliocontactpage-51bfe.firebaseapp.com",
    databaseURL: "https://portfoliocontactpage-51bfe.firebaseio.com",
    projectId: "portfoliocontactpage-51bfe",
    storageBucket: "",
    messagingSenderId: "54254190498"
  };
  firebase.initializeApp(config);
  var database = firebase.database();


  $("submitBtn").on("click", function(event){
      event.preventDefault();

      name = $("#userName").val().trim();
      email = $("#userEmail").val().trim();
      message = $("#message").val().trim();

      database.ref().push({
          name: name,
          email, email,
          message, message
      })
  })

  database.ref().on("child_added", function(childSnapshot){
      var name = childSnapshot.val().name;
      var email = childSnapshot.val().email;
      var message = childSnapshot.val().message;
  })