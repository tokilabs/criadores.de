firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function login(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

   // const promise = auth.createUserWithEmailAndPassword(userEmail.value, userPass.value);
    promise.catch(e => alert(e.message));

    alert("Cadastrado");

}