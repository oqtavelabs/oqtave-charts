require("jsdom-global")();
const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;

var Chart = require("chart.js");

exports.writeChartImage = function main(options) {

  const { document } = new JSDOM(`<canvas id="chart"></canvas>`).window;

  options.config.options.responsive = false;
  options.config.options.animation = false;
  options.config.options.width ? options.config.options.width : 400;
  options.config.options.height ? options.config.options.height : 400;

  let chart = new Chart(document.getElementById("chart"), options.config);

  let base64rawString = chart.toBase64Image();

  let base64Image = base64rawString.split(";base64,").pop();
  fs.writeFile(options.filename, base64Image, { encoding: "base64" }, function (
    err
  ) {
      if(err){
          console.log(err.message);
          return;
      }
    console.log("Chart File created");
  });
}

