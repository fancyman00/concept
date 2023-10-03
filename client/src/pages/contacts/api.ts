import axios from "axios";

export const sendMessage = async (d: any) => {
    axios.put(import.meta.env.VITE_APP_ADDR+'/api/send', d, { headers: { 'Content-Type': 'application/json' } });
};