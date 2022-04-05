let url =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";
let req = new XMLHttpRequest();

let values = [];
let baseTemp;

let xScale;
let yScale;

let yAxis;
let xAxis;

let width = 800;
let height = 600;
let padding = 40;

let svg = d3.select("svg");

let drawCanvas = () => {
  svg.attr("width", width);
  svg.attr("height", height);
};

let generateScale = () => {};

let heatPoints = () => {};

let drawAxis = () => {};

req.open("GET", url, true);
req.onload = () => {
  let values = JSON.parse(req.responseText);
  baseTemp = object["baseTempreature"];
  values = object["monthlyVariance"];
  console.log(values);
  console.log(baseTemp);
  drawCanvas();
  generateScale();
  heatPoints();
  drawAxis();
};
req.send();
