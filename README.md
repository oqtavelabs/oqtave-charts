# Oqtave Charts

Oqtave charts is a npm library which enables server side chart.js implementation.

## Installation

Use the npm to install oqtave-charts.

```bash
npm i @oqtavelabs/charts
```

## Usage

```javascript
const oqtavecharts = require("@oqtavelabs/charts");

oqtavecharts.writeChartImage({
      filename: "image.png",
      config: {
        type: "line",
        data: {
          labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
          datasets: [
            {
              data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
              label: "Africa",
              borderColor: "#3e95cd",
              fill: false,
            },
            {
              data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
              label: "Asia",
              borderColor: "#8e5ea2",
              fill: false,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "World population per region (in millions)",
          },
        },
      },
    });
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)