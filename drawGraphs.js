function emergencyCountVsCategory(emergencyCategories, noOfEmergenciesPerCategory) {
  console.log(emergencyCategories, noOfEmergenciesPerCategory);

  var width = 500,
      height = 500;
  //get window witdh height
  // document.documentElement.clientWidth or window.innerWidth
  //Create the SVG Viewport
  var svg = d3.select("body")
              .append("svg")
              .attr("width",document.documentElement.clientWidth)
              .attr("height",document.documentElement.clientHeight);

  var widthScale = d3.scale.linear()
                    .domain([0,d3.max(noOfEmergenciesPerCategory)])
                    .range([0,window.innerWidth])

  var colorScale = d3.scale.linear()
                    .domain([0,d3.max(noOfEmergenciesPerCategory)])
                    .range(["blue","red"])
  console.log(noOfEmergenciesPerCategory.map(function (d) {
    return widthScale(d);
  }))

  var bars = svg.selectAll("rect")
                .data(noOfEmergenciesPerCategory)
                .enter()
                  .append("rect")
                  .attr("height",50)
                  .attr("width",function(d){return widthScale(d)})
                  .attr("fill",function(d){return colorScale(d)})
                  .attr("y",function(d,i){return i*100})
                  .attr("transform","translate(50,50)")
}
