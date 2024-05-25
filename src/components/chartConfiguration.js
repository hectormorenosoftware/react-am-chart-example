export const chartConfiguration = {
  type: "XYChart",
  data: [
    {
      category: "Popcorn",
      value: 4032,
      color: "#67b7dc",
    },
    {
      category: "Hotdog",
      value: 724,
      color: "#dc6788",
    },
    {
      category: "Candy",
      value: 7854,
      color: "#a367dc",
    },
    {
      category: "Drinks",
      value: 14878,
      color: "#dc6967",
    },
  ],
  xAxes: [
    {
      type: "ValueAxis",
      renderer: {
        maxLabelPosition: 0.98,
      },
    },
  ],
  yAxes: [
    {
      type: "CategoryAxis",
      dataFields: {
        category: "category",
      },
      renderer: {
        grid: {
          template: {
            type: "Grid",
            location: 0,
          },
        },
      },
    },
  ],
  series: [
    {
      type: "ColumnSeries",
      columns: {
        template: {
          type: "Column",
          strokeOpacity: 0,
          tooltipText: "{categoryY}\n{valueX}",
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
        valueX: "value",
        categoryY: "category",
      },
    },
  ],
};
