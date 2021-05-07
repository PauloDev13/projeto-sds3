import axios from 'axios';

import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
  series: number[];
  labels: string[];
};

const DonutChart = () => {
	let chartData: ChartData = {labels: [], series:[]};

	axios.get(`${BASE_URL}/sales/amount-by-seller`)
	.then(response => {
		const data = response.data as SaleSum[];
		const labels = data.map(l => l.sellerName)
		const series = data.map(s => s.sum)

		chartData = {labels, series}

		console.log(chartData)
	})
	.catch(error => console.error(error))


  // const mockData = {
  //   series: [477138, 499928, 444867, 220426, 473088],
  //   labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé'],
  // };

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
};

export default DonutChart;
