

var width = 1600;
var height = 900;
var svg = d3.selectAll("body")
    .append("svg")
    .attr({width: width, height: height})
    .style({border: "solid 2px black"});

var circle_data = [[100, 0, 0, "yellow", "orange", 10, 0], [10, 400, 0, "blue", "green", 5, 0], [40, -400, 0, "red", "yellow", 10, 180]];
var deg = 1;

var circles = svg.selectAll("circle")
  .data(circle_data)
  .enter()
  .append("circle")
  .attr({
    id: function(d, i){return "circle" + i;},
    r: function(d){return d[0]},
    cx: function(d){return width/2 + d[1]},
    cy: function(d){return height/2 + d[2]},
    fill: function(d){return d[3]},
    stroke: function(d){return d[4]},
    "stroke-width": function(d){return d[5]},
  });

function new_pos(degrees){
  var radians = degrees * (Math.PI/180);
  console.log(degrees);
  return{cx: width/2 + (400 * Math.cos(radians)), cy: height/2 + (400 * Math.sin(radians))};
};

function update_circle(){
  var mini_circle_data = d3.select("#circle1").data();
  var mini_circle2_data = d3.select("#circle2").data();
  d3.select("#circle1").attr(new_pos(mini_circle_data[0][6]));
  d3.select("#circle2").attr(new_pos(mini_circle2_data[0][6]));
  mini_circle_data[0][6]++;
  mini_circle2_data[0][6]++;
  d3.select("#circle1").data(mini_circle_data);
  d3.select("#circle2").data(mini_circle2_data);
};

setInterval(update_circle, 15);

// var button = d3.select("body").append("div").append("button").html("stuff").attr({"onClick": "setInterval(update_circle, 25)"});
// var div = d3.select("body").append("div").html()
