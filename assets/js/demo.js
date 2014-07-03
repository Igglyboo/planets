

var width = 1600;
var height = 900;
var svg = d3.selectAll("body")
    .append("svg")
    .attr({width: width, height: height})
    .style({border: "solid 2px black"});

svg.append("line");

var circle_data = [[100, 0, 0, "yellow", "orange", 10], [10, 400, 0, "blue", "green", 5]];
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
  return{cx: width/2 + (400 * Math.cos(radians)), cy: height/2 + (400 * Math.sin(radians))};
};

function update_circle(){
  var new_attr = new_pos(deg);
  var mini_circle = d3.select("#circle1").attr(new_attr);
  line_attr = {x1: width/2, y1: height/2, x2: new_attr.cx, y2: new_attr.cy, style: "stroke:rgb(255,0,0);stroke-width:2"};
  var line = d3.select("line").attr(line_attr);
  var div = d3.select("div").html(JSON.stringify(new_attr) + JSON.stringify(line_attr));
  deg++;
};

setInterval(update_circle, 15);

// var button = d3.select("body").append("div").append("button").html("stuff").attr({"onClick": "setInterval(update_circle, 25)"});
// var div = d3.select("body").append("div").html()
