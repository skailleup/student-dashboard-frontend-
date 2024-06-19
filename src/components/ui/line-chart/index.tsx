import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  ChartOptions,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const learningData = {
  Jan: 5,
  Feb: 8,
  Mar: 10,
  Apr: 5,
  May: 4,
  Jun: 6,
  Jul: 9,
  Aug: 5,
  Sep: 6,
  Oct: 5,
  Nov: 7,
  Dec: 15
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Learning Hours',
      data: Object.values(learningData),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const options: ChartOptions<'bar'> = {
  scales: {
    x: {
        ticks: {
            font: {
                size: 10
            }
        },
        grid: {
            drawOnChartArea: false,
        }
    },
    y: {
      beginAtZero: true,
      max: 120,
      ticks: {
        font: {
            size: 10
        },
        callback: function(value: number | string, index: number,  ticks: any[]) {
            const allowedTicks = [0, 10, 20, 30, 40, 50, 60];
            if 
            (allowedTicks.includes(Number(value))) {
                return `${value}hrs`;
            }
      },
      stepSize: 10 
    },
    grid: {
        drawOnChartArea: false,
        },
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
    }
  }
};

const LineChart = () => {
  return <Bar data={data} options={options} />;
};

export default LineChart;