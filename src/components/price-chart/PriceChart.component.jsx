import React, { Component } from "react";
import Chart from "chart.js";
import "./PriceChart.style.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

const formatPrice = (price) =>
  price.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });

export default class PriceChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    const { data, labels, max } = this.props;

    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    let gradientStroke = myChartRef.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");

    gradientStroke.addColorStop(1, "#f49080");

    myLineChart = new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: labels,
        datasets: [
          {
            label: "Giá",
            data: data,
            // fill: false,
            // borderColor: gradientStroke,
            //
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            // pointHoverBorderColor: "rgba(0, 0, 0, 0.1)",
            pointRadius: 3,
            fill: false,
            borderWidth: 2,
          },
        ],
      },
      options: {
        //Customize chart options
        tooltips: {
          // position: 'top',
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 10,
                max: max * 2,
                padding: 40,
                userCallback: function (value, index, values) {
                  // Convert the number to a string and splite the string every 3 charaters from the end
                  return formatPrice(value);
                },
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawBorder: false,
                // drawTicks: false,
                // display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                zeroLineColor: "transparent",
                // display: false,
              },
              ticks: {
                maxTicksLimit: 5,
                // padding: 20,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
              },
            },
          ],
        },
      },
    });
  };

  render() {
    return (
      <div className="graphContainer">
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
