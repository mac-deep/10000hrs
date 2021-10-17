import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = () => {
  let hoursArr = [];
  for (let i = 0; i < 25; i++) {
    hoursArr.push(i);
  }
  const hourToYear = (hour) => 10000 / hour / 365;
  const hourToDays = (hour) => 10000 / hour;
  const hourToMonths = (hour) => 10000 / hour / 30.4325;

  return (
    <Line
      data={{
        labels: hoursArr,
        datasets: [
          {
            label: 'Years',
            data: hoursArr.map((hour) => hourToYear(hour)),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'red',
            borderRadius: 20,
          },
          {
            label: 'Hours',
            data: hoursArr.map((hour) => hourToDays(hour)),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'blue',
            borderRadius: 20,
          },
          {
            label: 'Months',
            data: hoursArr.map((hour) => hourToMonths(hour)),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'yellow',
            borderRadius: 20,
          },
        ],
      }}
    />
  );
};

export default Graph;
