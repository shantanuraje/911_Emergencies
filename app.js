//emergency object
function Emergency(latitude,longitude,description,zip,title,timeStamp,township,address){
  this.latitude = parseFloat(latitude) //float
  this.longitude = parseFloat(longitude)//float
  this.description = description//String
  this.zip = zip//String since some zips are missing
  this.title = title//string
  this.timeStamp = timeStamp //string
  this.township = township//string
  this.address = address//string
}
//load map and center to US
var mymap = L.map('mapid').setView([37.8, -96], 4);
var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);;
var emergencyTitles;

$('.datepicker').pickadate()

d3.csv("/dataset/911.csv", function (data) {
  var Emergencies=[]
  // var t0 = performance.now();
  for (var i=0;i<data.length;i++) {
    var emergency = new Emergency(data[i].lat,data[i].lng,data[i].desc,data[i].zip,data[i].title,data[i].timeStamp,data[i].twp,data[i].addr,data[i].e);
    Emergencies.push(emergency);
  }
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
});

function identifyEmergencies(emergencyTitles) {
  // console.log(emergencyTitles);
  var emergencyCategories = emergencyTitles.map(function (emergencyTitle) {
    // check if all titles contain ':', only false is printed so we can conclude that all the titles have an emergency type followed by a ':'
    var searchForColon = emergencyTitle.search(RegExp(":"))
    if(searchForColon==-1)
    //colon not found
      console.log(true);
    else
    //colon found
      return emergencyTitle.slice(0,searchForColon);
    // emergencyTitle.search(RegExp(":"))
  })
  var test=[]
  // console.log(emergencyCategories)
  emergencyCategories.map(function (category) {
    // console.log(category," ",category.indexOf(category)!=-1);
    if (test.indexOf(category)==-1) {
      test.push(category)
    }
  })
  return test;//contains all emergency categories


}
