export const chartConfigurationLine = {
  type: "XYChart",
  data: [
    { date: 1577743200000, open: 122, close: 104 },
    { date: 1577829600000, open: 121, close: 70 },
    { date: 1577916000000, open: 101, close: 55 },
    { date: 1578002400000, open: 103, close: 45 },
    { date: 1578088800000, open: 153, close: 85 },
    { date: 1578175200000, open: 150, close: 116 },
    { date: 1578261600000, open: 135, close: 153 },
    { date: 1578348000000, open: 98, close: 152 },
    { date: 1578434400000, open: 101, close: 192 },
    { date: 1578520800000, open: 110, close: 225 },
    { date: 1578607200000, open: 157, close: 233 },
    { date: 1578693600000, open: 128, close: 232 },
    { date: 1578780000000, open: 101, close: 235 },
    { date: 1578866400000, open: 109, close: 200 },
    { date: 1578952800000, open: 142, close: 214 },
    { date: 1579039200000, open: 123, close: 224 },
    { date: 1579125600000, open: 99, close: 176 },
    { date: 1579212000000, open: 100, close: 172 },
    { date: 1579298400000, open: 67, close: 138 },
    { date: 1579384800000, open: 81, close: 127 },
    { date: 1579471200000, open: 39, close: 137 },
    { date: 1579557600000, open: 73, close: 127 },
    { date: 1579644000000, open: 78, close: 154 },
    { date: 1579730400000, open: 116, close: 127 },
    { date: 1579816800000, open: 136, close: 78 },
    { date: 1579903200000, open: 139, close: 61 },
    { date: 1579989600000, open: 162, close: 13 },
    { date: 1580076000000, open: 201, close: 41 },
    { date: 1580162400000, open: 221, close: 72 },
    { date: 1580248800000, open: 257, close: 87 },
    { date: 1580335200000, open: 211, close: 114 },
    { date: 1580421600000, open: 233, close: 138 },
    { date: 1580508000000, open: 261, close: 141 },
    { date: 1580594400000, open: 279, close: 130 },
  ],
  xAxes: [
    {
      type: "DateAxis",
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
      tooltip: {
        disabled: true,
      },
    },
  ],
  series: [
    {
      type: "LineSeries",
      name: "District Metered Usage",
      stroke: "#1b7cb3",
      fillOpacity: 0,
      strokeWidth: 2,
      tooltipText: "open: {openValueY.value} close: {valueY.value}",
      sequencedInterpolation: true,
      dataFields: {
        dateX: "date",
        openValueY: "open",
        valueY: "close",
      },
    },
  ],
};
