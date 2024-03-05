const pandas = require('pandas-js');
const Chart = require('chart.js');

class AnalyticsTools {
    analyzeData(data) {
        const dataframe = new pandas.DataFrame(data);
        const summary = dataframe.describe();
        return summary;
    }

    visualizeData(labels, data) {
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Data Visualization',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            }
        });
    }
}

module.exports = new AnalyticsTools();
