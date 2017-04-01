import fetch from 'isomorphic-fetch';
import { SERVER_URL } from '../../config';

export function getAllChartData() {
    return fetch(`${SERVER_URL}/scatter-data`)
        .then((response) => {
            if (response.status >= 400) throw new Error('Bad server response');
            return response.json();
        });
}

