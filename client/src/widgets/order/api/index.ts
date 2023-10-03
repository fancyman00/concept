import axios from 'axios';

export const sendOrder = async (d: any) => {
    axios.put(import.meta.env.VITE_APP_ADDR + '/api/order', d, { headers: { 'Content-Type': 'application/json' } });
};
