import { useEffect, useState } from 'react';
import axios from 'axios';

import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';

type SeriesData = {
	name: String;
	data: number[];
}

type ChartData= {
	labels:{ categories: string[]};
	series: SeriesData[];
}

const BarChart = () => {
	const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: '',
        data: [],
      },
    ],
		})

	useEffect(() => {
    axios
      .get(`${BASE_URL}/sales/success-by-seller`)
      .then((response) => {
        const data = response.data as SaleSuccess[];
        const labels = data.map((l) => l.sellerName);
        const series = data.map((s) => round(100.0 * s.deals / s.visited, 1));

        setChartData({ labels: {
					categories: labels,
				},
				series: [
					{
						name: '% Sucesso',
						data: series,
					},
				], });

      })
      .catch((error) => console.error(error));
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  // const mockData = {
  //   labels: {
  //     categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé'],
  //   },
  //   series: [
  //     {
  //       name: '% Sucesso',
  //       data: [43.6, 67.1, 67.7, 45.6, 71.1],
  //     },
  //   ],
  // };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
};

export default BarChart;
