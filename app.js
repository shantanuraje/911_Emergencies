//emergency object
function Emergency(latitude,longitude,description,zip,title,timeStamp,township,address){
  this.latitude = latitude //float
  this.longitude = longitude//float
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

d3.csv("/dataset/911.csv", function (data) {
  var Emergencies=[]
  console.log(mymap);
  var t0 = performance.now();
  for (var i=0;i<data.length;i++) {
    var emergency = new Emergency(data[i].lat,data[i].lng,data[i].desc,data[i].zip,data[i].title,data[i].timeStamp,data[i].twp,data[i].addr,data[i].e);
    Emergencies.push(emergency);
    var marker = L.marker([parseFloat(data[i].lat),parseFloat(data[i].lng)]).addTo(mymap);
  }
  var t1 = performance.now();
  // console.log(Emergencies);
  console.log("Parsing data from csv " + (t1 - t0) + " milliseconds.")
});
