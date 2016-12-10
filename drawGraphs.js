function emergencyCountVsCategory(emergencyCategories, noOfEmergenciesPerCategory) {
  console.log(emergencyCategories, noOfEmergenciesPerCategory);

  var width = 500,
      height = 500;

  //Create the SVG Viewport
  var svg = d3.select("body")
              .append("svg")
              .attr("width",width)
              .attr("height",height);
  var bars = svg.selectAll("rect")
                .data(noOfEmergenciesPerCategory)
                .enter()
                  .append("rect")
                  .attr("width",50)
                  .attr("height",function(d){return d/100})
                  .attr("fill","red")
                  .attr("x",function(d,i){return i*100})
}
