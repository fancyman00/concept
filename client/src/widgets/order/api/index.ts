import axios from 'axios';

export const sendOrder = async (d: any) => {
    axios.put('http://127.0.0.1:8000' + '/api/order', d, { headers: { 'Content-Type': 'application/json' } });
};
