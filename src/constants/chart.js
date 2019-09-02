export const type = 'bar'
export const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'points',
      data: null,
      backgroundColor: 'rgba(151, 215, 119, 0.5)',
      borderColor: 'rgba(151, 215, 119, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(151, 215, 119, 0.8)'
    }
  ]
}
export const options = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false
        }
      }
    ]
  }
}
