d3.csv("/dataset/911.csv", function (data) {
  // console.log(data);
  //get all emergency titles for analysis
  emergencyTitles = data.map(function (emergency) {return emergency.title});
  // console.log(emergencyTitles);
  emergencyCategories = identifyEmergencyCategories(emergencyTitles)
  console.log(emergencyCategories);
  //count number of emergencies for each category
  noOfEmergenciesPerCategory = countEmergenciesPerCategory(emergencyCategories,emergencyTitles)
  console.log(noOfEmergenciesPerCategory);
  //plot count of categories vs category
  emergencyCountVsCategory(emergencyCategories, noOfEmergenciesPerCategory)
});
