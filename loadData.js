function loadDatafromCsv() {
  var emergencies=[]
  d3.csv("/dataset/911.csv", function (data) {
    for (var i=0;i<data.length;i++) {
      var emergency = new Emergency(data[i].lat,data[i].lng,data[i].desc,data[i].zip,data[i].title,data[i].timeStamp,data[i].twp,data[i].addr);
      emergencies.push(emergency);
    }
  });
}
