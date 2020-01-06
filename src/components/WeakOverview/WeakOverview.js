import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import { Line } from '@nivo/line'
import styles from './WeakOverview.css';

class WeakOverview extends Component {
  render() {
    const data = [
      {
        "id": "Week",
        "data": [
          {
            "x": "Monday",
            "y": 3412
          },
          {
            "x": "Tuesday",
            "y": 3125
          },
          {
            "x": "Wednesday",
            "y": 6000
          },
          {
            "x": "Thursday",
            "y": 7641
          },
          {
            "x": "Friday",
            "y": 1200
          },
          {
            "x": "Saturday",
            "y": 3001
          },
          {
            "x": "Sunday",
            "y": 4012
          },
        ]
      }
    ];

    const theme = {
      axis: {
        fontSize: "14px",
        tickColor: "#E1E1E1",
        ticks: {
          line: {
            stroke: "#555555"
          },
          text: {
            fill: "#E1E1E1"
          }
        },
        legend: {
          text: {
            fill: "#AAAAAA"
          }
        }
      },
      grid: {
        line: {
          stroke: "#32293A"
        }
      }
    };

    return (
      <div className={styles.container}>
        <div className={styles.header}>Weekly expenses</div>
        <div className={styles.content}>
          <Line
            theme={theme}
            data={data}
            height={250}
            width={510}
            margin={{ bottom: 30, left: 70, right: 20 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 0, max: 8600, stacked: true, reverse: false }}
            curve="linear"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: 'bottom',
              tickSize: 1,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Day',
              legendOffset: 36,
              legendPosition: 'middle'
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 0,
              tickPadding: 12,
              tickValues: 5,
              legend: 'Sum',
              format: value => `${value} ₽`,
              legendOffset: -63,
              legendPosition: 'middle'
            }}
            colors="rgb(150, 70, 228)"
            lineWidth={2}
            pointSize={8}
            pointBorderWidth={2}
            pointLabel="y"
            pointLabelYOffset={-2}
            enableArea={true}
            useMesh={true}
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(WeakOverview);
