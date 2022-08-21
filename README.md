# Basic Horizontal Bar Chart

![Chart.](http://yavuzyolbir.com/github/basic-horizontal-bar-chart.jpg "Horizontal Bar Chart")

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
        name: "Quisque",
        category: "Mauris",
        percent: 60,
    },
    {
        name: "Imperdiet",
        category: "Aenean",
        percent: 30,
    },
    {
        name: "Consequat",
        category: "Suspendisse",
        percent: 50,
    },
    {
        name: "Integer",
        category: "Mauris",
        percent: 10,
    },
    {
        name: "Volutpat",
        category: "Aenean",
        percent: 40,
    },
];

const myCategories = [
    {
        name: "Mauris",
        color: "#3C58EF",
    },
    {
        name: "Aenean",
        color: "#EF6440",
    },
    {
        name: "Suspendisse",
        color: "#24252A",
    },
];
```

Run Function:
```sh
horizontalBarChart("myChart", myLabels, myCategories);
```