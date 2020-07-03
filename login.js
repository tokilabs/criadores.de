
  // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCoOYhqls1rJtW2DH0R2Suf32_P5fZ3dHQ",
//     authDomain: "criadores-b8998.firebaseapp.com",
//     databaseURL: "https://criadores-b8998.firebaseio.com",
//     projectId: "criadores-b8998",
//     storageBucket: "criadores-b8998.appspot.com",
//     messagingSenderId: "949964734987",
//     appId: "1:949964734987:web:dd7b980c075510decf3d0e",
//     measurementId: "G-WYVF9RLTRK"
//   };
//   firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  
  function signUp(){
      
      var email = document.getElementByType("email");
      var password = document.getElementByType("password");
      
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      
      alert("Signed Up");
  }
    
  
  function signIn(){
      
      var email = document.getElementsByName("textEMail");
      var password = document.getElementByName("textSuaSenha");

      
      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
          
  }
  
  
  function signOut(){
      
      auth.signOut();
      alert("Signed Out");
      
  }
  
  
  
  auth.onAuthStateChanged(function(user){
      
      if(user){
          
          var email = user.email;
          alert("Active User " + email);
          
          //Take user to a different or home page

          //is signed in
          
      }else{
          
          alert("No Active User");
          //no user is signed in
      }
      
      
      
  });
  

