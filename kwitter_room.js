
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBhKpLBqVTbBQJe_mwBAmlRJnZ5JYV233k",
    authDomain: "kwitterapp-69e28.firebaseapp.com",
    databaseURL: "https://kwitterapp-69e28-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-69e28",
    storageBucket: "kwitterapp-69e28.appspot.com",
    messagingSenderId: "666068006523",
    appId: "1:666068006523:web:044a9c054b6d02170c54de"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("welcome_tag").innerHTML = "Welcome " + user_name + " !";

function addroom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room_name" + Room_names);
    row = "<div class = 'room_name' id = "+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}

function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
    window.location = "index.html"; 
}
