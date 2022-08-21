# Basic Horizontal Bar Chart

Basic Horizontal Bar Chart is a simple graph function like its called.
Basic but smart. 


- Auto resizing by highest percent value
- Basic Usage
- Vanilla js

## Usage

Html:
```sh
<div class="horizontal-bar-chart" id="myChart"></div>
```

Css:
```
<link rel="stylesheet" href="chart.css">
```

Data:
```
const myLabels = [
    {
        name: "Easy to use",
        category: "Positive",
        percent: 40,
    },
    {
        name: "Reliable",
        category: "Overall",
        percent: 20,
    },
    {
        name: "Difficiult",
        category: "Negative",
        percent: 10,
    },
];

const myCategories = [
    {
        name: "Positive",
        color: "#355DEB",
    },
    {
        name: "Overall",
        color: "#65AEEE",
    },
    {
        name: "Negative",
        color: "#2A3A48",
    },
];
```

Run Function:
```sh
horizontalBarChart("myChart", myLabels, myCategories);
```