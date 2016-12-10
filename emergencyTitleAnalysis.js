function identifyEmergencyCategories(emergencyTitles) {
  //this section extracts all possible emergency categories give all emergency titles in the dataset
  var allEmergencyCategories = emergencyTitles.map(function (emergencyTitle) {
    // check if title contain ':', if only false is printed so we can conclude that all the titles have an emergency type followed by a ':'
    var searchForColon = emergencyTitle.search(RegExp(":")) // search returns index of colon if present, else -1
    //colon not found
    if(searchForColon==-1){
      console.log(true);
    }
    //colon found, take a slice of title string upto colonIndex
    else{
      // console.log(false);
      return emergencyTitle.slice(0,searchForColon);
    }
  })
  // console.log(allEmergencyCategories);
  //this section removes all duplicates, reducing all categories to unique categories present in the dataset
  var emergencyCategories=[]
  allEmergencyCategories.map(function (category) {
    if (emergencyCategories.indexOf(category)==-1) {
      emergencyCategories.push(category)
    }
  })
  // console.log(emergencyCategories);
  return emergencyCategories;//contains all emergency categories
}
function countEmergenciesPerCategory(emergencyCategories,emergencyTitles) {
  //create 0 filled array of length = emergencyCategories.length to store count
  var count=emergencyCategories.map(function (category) {
    return 0;
  });
  // console.log(count);
  emergencyCategories.map(function (category) {
    emergencyTitles.map(function (title) {
      //need to append a colon since titles are formatted category:subcategory
      if (title.includes(category+":")) {
        count[emergencyCategories.indexOf(category)]++;
      }
    })
  })
  // console.log(count);
  return count;
}
