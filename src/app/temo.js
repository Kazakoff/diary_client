export default {
    data() {
      return {
          seriesData: series1,
          primaryXAxis: {
          title: 'Months',
          },
          primaryYAxis: {
          title: 'Rupees against Dollars',
          interval: 5
          },
          type: 'Linear'
      };
    },
    provide: {
      chart: [ScatterSeries, Trendlines, LineSeries]
    }
  };