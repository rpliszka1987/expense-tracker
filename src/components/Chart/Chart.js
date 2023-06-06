import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

// Creates the chart to display the data on a chart
function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
