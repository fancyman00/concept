import axios from "axios";

export const sendMessage = async (d: any) => {
    axios.put('http://127.0.0.1:8000'+'/api/send', d, { headers: { 'Content-Type': 'application/json' } });
};