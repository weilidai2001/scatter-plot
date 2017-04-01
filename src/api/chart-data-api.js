export function getAllChartData() {
    return fetch('/scatter-data').then((response) => response.json());
}

