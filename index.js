let url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";
let req = new XMLHttpRequest()

let values = []
let baseTemp

let xScale
let yScale

let yAxis
let xAxis

let width = 800
let height = 600
let padding = 40

let svg = d3.select("svg")

let canvas = d3.select('#canvas')
  svg.attr("width", width)
  svg.attr("height", height)

let generateScales = () => {

  xScale = d3.scaleLinear()
    .range([padding, width-padding])
};

let drawCells = () => {};

let drawAxes = () => {
  let xAxis = d3.axisBottom(xScale)

  canvas.append('g')
    .call(xAxis)
    .attr('id', 'x-axis')
    .attr('transform', 'translate(0, ' + (height-padding) +')')
};

req.open('GET', url, true)
req.onload = () => {
  let object = JSON.parse(req.responseText);
  baseTemp = object['baseTempreature'];
  values = object['monthlyVariance'];
  console.log(baseTemp);
  console.log(values);
  generateScales();
  drawCells();
  drawAxes();
};
req.send();
