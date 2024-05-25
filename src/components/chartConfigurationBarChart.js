export const chartConfigurationBarChart = {
  type: "XYChart",
  data: [
    {
      country: "USA",
      visits: 3025,
      color: "#67b7dc",
    },
    {
      country: "China",
      visits: 1882,
      color: "#dc6788",
    },
    {
      country: "Japan",
      visits: 1809,
      color: "#a367dc",
    },
    {
      country: "Germany",
      visits: 1322,
      color: "#dc6967",
    },
    {
      country: "UK",
      visits: 1122,
      color: "#dc8c67",
    },
    {
      country: "France",
      visits: 1114,
      color: "#4caf50",
    },
    {
      country: "Mexico",
      visits: 984,
      color: "#00bcd4",
    },
    {
      country: "Spain",
      visits: 711,
      color: "#3f51b5",
    },
    {
      country: "Canada",
      visits: 665,
      color: "#f38400",
    },
  ],
  xAxes: [
    {
      type: "CategoryAxis",
      dataFields: {
        category: "country",
      },
      tooltip: {
        disabled: true,
      },
      renderer: {
        minGridDistance: 60,
        grid: {
          template: {
            location: 0,
          },
        },
      },
    },
  ],
  yAxes: [
    {
      type: "ValueAxis",
      min: 0,
      cursorTooltipEnabled: false,
      renderer: {
        minWidth: 50,
      },
    },
  ],
  series: [
    {
      type: "ColumnSeries",
      sequencedInterpolation: true,
      tooltip: {
        pointerOrientation: "vertical",
      },
      columns: {
        template: {
          type: "Column",
          strokeOpacity: 0,
          tooltipText: "{categoryX}\n{valueY}",
          tooltipPosition: "pointer",
          propertyFields: {
            fill: "color",
          },
          column: {
            cornerRadiusTopLeft: 10,
            cornerRadiusTopRight: 10,
            cornerRadiusBottomRight: 10,
            cornerRadiusBottomLeft: 10,
          },
        },
      },
      dataFields: {
        valueY: "visits",
        categoryX: "country",
      },
    },
  ],
};
