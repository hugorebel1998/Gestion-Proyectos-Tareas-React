import axios from "axios";
import { toast, Flip } from 'react-toastify';

const baseURL = import.meta.env.VITE_URL_API;

export const http = axios.create({ baseURL });

http.interceptors.request.use((config) => {

    return config;
});

http.interceptors.response.use(({ data }) => {

    return data;
}, async (response) => {

    const { data, status } = response.response

    let menssage = data.error || 'Algo salio mal';

    toast.error(menssage, {
        theme: "dark",
        transition: Flip,
    });

    return Promise.reject(menssage);
})