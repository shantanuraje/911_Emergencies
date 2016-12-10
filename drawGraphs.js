function emergencyCountVsCategory(emergencyCategories, noOfEmergenciesPerCategory) {
  console.log(emergencyCategories, noOfEmergenciesPerCategory);
  //Create the SVG Viewport
  var svgContainer = d3.select("body").append("svg")
                                       .attr("width", 600)
                                       .attr("height", 600);

  //Create the Scale we will use for the Axis
  var axisScale = d3.scaleLinear()
                           .domain([0, 5])
                           .range([0, 500]);

  //Create the Axis
  var xAxis = d3.axisRight(axisScale);
  var yAxis = d3.axisBottom(axisScale);

  //Create an SVG group Element for the Axis elements and call the xAxis function
  var xAxisGroup = svgContainer.append("g").call(xAxis);
  var yAxisGroup = svgContainer.append("g").call(yAxis);

}
