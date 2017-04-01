export default class ChartDataApi {
    static getAllChartData() {
        return fetch('/scatter-data').then((response) => response.json());
    }
}
