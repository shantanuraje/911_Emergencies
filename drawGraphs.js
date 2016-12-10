function emergencyCountVsCategory(emergencyCategories, noOfEmergenciesPerCategory) {
  console.log(emergencyCategories, noOfEmergenciesPerCategory);

  var width = 700,
      height = 700;
  //get window witdh height
  // document.documentElement.clientWidth or window.innerWidth
  var widthScale = d3.scale.linear()
                    .domain([0,d3.max(noOfEmergenciesPerCategory)])
                    .range([0,width-25])

  var colorScale = d3.scale.linear()
                    .domain([0,d3.max(noOfEmergenciesPerCategory)])
                    .range(["blue","red"])

  var xAxis = d3.svg.axis()
                .tickFormat(d3.format("s"))
                .scale(widthScale);

  var heightScale = d3.scale.ordinal()
                      .domain(emergencyCategories)
                      .rangeBands([0,height])

  var yAxis = d3.svg.axis().scale(heightScale)
  //Create the SVG Viewport
  var svg = d3.select("body")
              .append("svg")
              .attr("width",width)
              .attr("height",height)
              .style("margin","25px")
              .style("padding","25px")
              .append("g")
              // .attr("transform","translate(50,50)") //moving, rotating, etc.

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
                  // .attr("y",function(d,i){return heightScale(d)})
                  .attr("y",function(d,i){return (i+1)*100;})

  console.log([1,2,3].map(function(d){return heightScale(d)}));


  svg.append("g")
    .attr("transform","translate(0,"+(height-45)+")")
    .call(xAxis)

  svg.append("g")
     .attr("transform","rotate(90)")
     .call(yAxis)
  //.attr("transform","translate(0,0)")
}
