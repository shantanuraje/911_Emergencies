function emergencyCountVsCategory(emergencyCategories, noOfEmergenciesPerCategory) {
  console.log(emergencyCategories, noOfEmergenciesPerCategory);
  console.log(test); //absence of var makes variables global hence they are accessible here
  var margin = {top: 40, right: 20, bottom: 30, left: 40},
      width = document.documentElement.clientWidth - margin.left - margin.right,
      height = document.documentElement.clientHeight - margin.top - margin.bottom;
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
              console.log(xAxis);
  var heightScale = d3.scale.ordinal()
                      .domain(emergencyCategories)
                      .rangeBands([0,height])

  var yAxis = d3.svg.axis()
                    .scale(heightScale)

  //Create the SVG Viewport
  var svg = d3.select(".graph")
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
  var tooltip = d3.select("body")
  	.append("div")
  	.style("position", "absolute")
  	.style("z-index", "10")
  	.style("visibility", "hidden")
    // .style("top","0")
  	.text("Catergory: count"); // place holder
  var bars = svg.selectAll("rect")
                .data(noOfEmergenciesPerCategory)
                .enter()
                  .append("rect")
                  .attr("height",20)
                  .attr("width",function(d){return widthScale(d)})
                  .attr("fill",function(d){return colorScale(d)})
                  // .attr("y",function(d,i){return heightScale(d)})
                  .attr("y",function(d,i){return (i+1)*23;})
                  .on("click", function (d,i) {
                    console.log(d,i);
                    // d3.selectAll("div").remove()
                    tooltip.remove()
                    d3.select("svg").remove()
                    console.log(emergencySubCategoriesReduced[0],noOfEmergenciesPerSubCategory[0])
                    emergencyCountVsCategory(emergencySubCategoriesReduced[i],noOfEmergenciesPerSubCategory[i])

                  })
                  .on("mouseover", function(d,i){tooltip.text(emergencyCategories[i]+": "+d); return tooltip.style("visibility", "visible");})
                  .on("mousemove", function(){return tooltip.style("top",(event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
	                .on("mouseout", function(d){return tooltip.style("visibility", "hidden");})
  // console.log([1,2,3].map(function(d){return heightScale(d)}));


  var x =svg.append("g")
    .attr("transform","translate(0,"+(height)+")")
    .call(xAxis)

  var y = svg.append("g")
     .attr("transform","rotate(90)")
    //  .attr("class","yAxis")
     .call(yAxis)
  //.attr("transform","translate(0,0)")
}
