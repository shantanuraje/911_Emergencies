d3.csv("./911.csv", function (data) {
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
  test = "something";
  emergencyCountVsCategory(emergencyCategories, noOfEmergenciesPerCategory)

  emergencySubCategoriesReduced = identifyEmergencySubCategories(emergencyCategories,emergencyTitles)
  noOfEmergenciesPerSubCategory = countEmergenciesPerSubCategory(emergencySubCategoriesReduced,emergencyTitles)
  console.log(emergencySubCategoriesReduced);
  console.log(noOfEmergenciesPerSubCategory);
  // d3.select("svg").remove()
  // emergencyCountVsCategory(emergencySubCategoriesReduced[0],noOfEmergenciesPerSubCategory[0])
});
