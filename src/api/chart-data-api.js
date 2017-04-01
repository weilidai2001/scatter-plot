import fetch from 'isomorphic-fetch';
import { SERVER_URL } from '../../config';

export function getAllChartData() {
    return fetch(`${SERVER_URL}/scatter-data`).then((response) => response.json());
}

