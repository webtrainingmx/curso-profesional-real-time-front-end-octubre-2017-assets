const BG_COLORS = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(201, 203, 207, 0.2)'
];

const BORDER_COLORS = [
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)'
];

const BORDER_WIDTH = 1;

const CHART_OPTIONS = {
  title: {
    display: true,
    text: 'Reporte de votos'
  },
  scales: {
    yAxes: [ {
      display: true,
      ticks: {
        beginAtZero: true,
      }
    } ]
  }
};

export const ChartsConfig = {
  BG_COLORS: BG_COLORS,
  BORDER_COLORS: BORDER_COLORS,
  BORDER_WIDTH: BORDER_WIDTH,
  CHART_OPTIONS: CHART_OPTIONS
};
