import { DataFrame } from 'pandas-js';
import { Chart } from 'chart.js';

class AnalyticsTools {
    data: any;
    listData = [0, 1, 2, 3, 4];

    analyzeData(data: any) {
        const dataframe = new DataFrame(data);
        const summary = dataframe.describe();
        return summary;
    }

    visualizeData(labels: string[], data: number[]) {
        const ctx = document.getElementById('myChart') as HTMLCanvasElement | null;
        if (!ctx) {
            throw new Error("Canvas element 'myChart' not found.");
        }

        const myChart = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Data Visualization',
                        data: data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            },
        });
    }
}

export default new AnalyticsTools();
