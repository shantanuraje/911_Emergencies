// var t1 = performance.now();
//extract emergency titles from Emergencies array of objects
Materialize.toast('Identifying emergency categories', 4000) // 4000 is the duration of the toast
emergencyTitles = Emergencies.map(function (emergency) {
  return emergency.title
});
emergencyTitles = identifyEmergencies(emergencyTitles)
for (var emergencyTitle in emergencyTitles) {
  if (emergencyTitles.hasOwnProperty(emergencyTitle)) {
    console.log(emergencyTitles[emergencyTitle]);
    $("#mapid").append("<a class='waves-effect waves-light btn emergencyCategories' id='button_"+emergencyTitles[emergencyTitle]+"'>"+emergencyTitles[emergencyTitle]+"</a>")
  }
}
console.log(emergencyTitles)
// console.log("Parsing data from csv " + (t1 - t0) + " milliseconds.")
