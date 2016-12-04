function Emergency(latitude,longitude,description,zip,title,timeStamp,township,address){
  this.latitude = latitude
  this.longitude = longitude
  this.description = description
  this.zip = zip
  this.title = title
  this.timeStamp = timeStamp
  this.township = township
  this.address = address
}
var Emergencies=[]
var t0 = performance.now();
d3.csv("/dataset/911.csv", function(data) {
  // console.log(typeof(data));
  // console.log(data.length);
  var t0 = performance.now();
  for (var i=0;i<data.length;i++) {
    // console.log(data[i]);
    //dont need dummy variable e
    var emergency = new Emergency(data[i].lat,data[i].lng,data[i].desc,data[i].zip,data[i].title,data[i].timeStamp,data[i].twp,data[i].addr,data[i].e);
    Emergencies.push(emergency);
  }
  // console.log(Emergencies);
  var t1 = performance.now();
  console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
});
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
