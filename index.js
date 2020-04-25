require("jsdom-global")();
const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;

var Chart = require("chart.js");

exports.writeChartImage = function main(options, callback) {
  const { document } = new JSDOM(
    `<canvas id="chart" width="1000" height="1000"></canvas>`
  ).window;

  options.config.options.responsive = false;
  options.config.options.animation = false;
  //options.config.options.width ? options.config.options.width : 400;
  //options.config.options.height ? options.config.options.height : 400;

  let chart = new Chart(document.getElementById("chart"), options.config);

  let base64rawString = chart.toBase64Image();

  let base64Image = base64rawString.split(";base64,").pop();
  fs.writeFile(options.filename, base64Image, { encoding: "base64" }, callback);
};

exports.getBase64String = function main(options) {
  const { document } = new JSDOM(
    `<canvas id="chart" width="1000" height="1000" ></canvas>`
  ).window;

  options.config.options.responsive = false;
  options.config.options.animation = false;
  //options.config.options.width ? options.config.options.width : 1000;
  //options.config.options.height ? options.config.options.height : 1000;

  let chart = new Chart(document.getElementById("chart"), options.config);

  return document.getElementById("chart").toDataURL();
  //console.log(a);
  //return chart.toBase64Image();

  // let base64Image = base64rawString.split(";base64,").pop();
  // return fs.writeFile(options.filename, base64Image, { encoding: "base64" },callback);
};
