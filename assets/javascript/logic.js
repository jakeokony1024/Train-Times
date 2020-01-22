
var firebaseConfig = {
  apiKey: "AIzaSyDpwRmZNNEUU-52OJEdD1XRByJ3dSQygOY",
  authDomain: "newtraintime.firebaseapp.com",
  databaseURL: "https://newtraintime.firebaseio.com",
  projectId: "newtraintime",
  storageBucket: "newtraintime.appspot.com",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var dataRef = firebase.database();
  
var trainName = "";
var destination = "";
var firstTime = "00:00";
var minsAway = 0;
var tFrequency = 0;
var currentTime = "";
  

$("#addTrain").on("click",function(){
    event.preventDefault();
    trainName = $("#Tname").val().trim();
    destination = $("#destination").val().trim();
    firstTime = $("#first").val().trim();
    tFrequency = $("#frequency").val().trim();

    dataRef.ref().push({
      trainName:trainName,
      destination:destination,
      firstTime:firstTime,
      tFrequency:tFrequency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    })

})

dataRef.ref().on("child_added", function (snapshot) {
  var sv = snapshot.val();
  $("#nameCol").text(sv.trainName);
  $("#destCol").text(sv.destination);
  $("#freqCol").text(sv.tFrequency);
  $("#arrivalCol").text();
  $("#minsAwayCol").text();
  


})
