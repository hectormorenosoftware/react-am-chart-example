import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as am4core from "@amcharts/amcharts4/core";
import "@amcharts/amcharts4/charts";

import { chartConfiguration } from "./chartConfiguration";
import { chartConfigurationLine } from "./chartConfiguationLine";
import { chartConfigurationBarChart } from "./chartConfigurationBarChart";
import "./indexPage.css";

class IndexPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.chart = this.chart ? this.chart : am4core.Sprite;
  }

  componentDidMount() {
    this.chart = am4core.createFromConfig(
      // IMPORTANT: for performance considerations amCharts performs some
      // operations directly on the passed configuration object. For this
      // reason, in cases when you need the configuration to remain intact
      // after rendering a chart, you should never pass a chart configuration
      // object directly to am4core.createFromConfig and pass a copy instead.
      chartConfiguration,
      "chartdiv"
    );
    this.chartTwo = am4core.createFromConfig(
      chartConfigurationLine,
      "chartdivtwo"
    );
    this.chartThree = am4core.createFromConfig(
      chartConfigurationBarChart,
      "chartdivthree"
    );

    document.getElementById("id-61-title").parentNode.style.display = "none";
    document.getElementById("id-177-title").parentNode.style.display = "none";
    document.getElementById("id-294-title").parentNode.style.display = "none";
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
    if (this.chartTwo) {
      this.chartTwo.dispose();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="chart-flex-box">
          <div className="corporate-report-header-wrapper">
            <h1 className="corporate-report-header">Corporate Sales Report</h1>
          </div>
        </div>
        <div className="chart-flex-box">
          <div className="chart-css">
            <h2>Concession Stand Report Downtown San Diego AMC</h2>
            <div id="chartdiv" className="chart-div"></div>
          </div>
        </div>
        <div className="chart-flex-box">
          <div className="chart-css">
            <h2>DVD Sales Report</h2>
            <div id="chartdivtwo" className="chart-div"></div>
          </div>
        </div>
        <div className="chart-flex-box">
          <div className="chart-css">
            <h2>Blue Ray Sales Report By Nation</h2>
            <div id="chartdivthree" className="chart-div"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(IndexPage));
