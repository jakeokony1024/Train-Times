
var firebaseConfig = {
    apiKey: "AIzaSyDUozswkjGtnrxh8C7I33WYtnVO_SfnntI",
    authDomain: "traintime-4b08a.firebaseapp.com",
    databaseURL: "https://traintime-4b08a.firebaseio.com",
    projectId: "traintime-4b08a",
    storageBucket: "traintime-4b08a.appspot.com",
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();

  var trainName = "";
  var destination = "";
  var firstTime = "00:00";
  var tFrequency = 0;
  var currentTime = moment();

$("#addTrain").on("click",function(){
    trainName = $("Tname").val.trim();
    destination = $("#destination").val.trim();
    firstTime = $("#first").val.trim();
    tFrequency = $("#frequency").val.trim();

})


  


