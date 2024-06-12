import axios from "axios";
import { toast, Flip } from 'react-toastify';
import { Spinner } from '@/components';

const baseURL = import.meta.env.VITE_URL_API;

export const http = axios.create({ baseURL });

http.interceptors.request.use((config) => {

    const response = localStorage.getItem('user')

    const user = JSON.parse(response)

    if (user)
        config.headers.Authorization = `Bearer ${user.access_token}`

    return config;

});

http.interceptors.response.use(({ data }) => {


    return data;
}, async (response) => {

    const { data, status } = response.response

    let menssage = data.error || 'Algo salio mal';


    if (response.status === 401 &&  response.data.message == "Error autenticación") {

        try {
            const userStorage = localStorage.getItem('user');
            const usuario = JSON.parse(userStorage);

            const payload = {
                token: usuario.access_token,
                usuario_id: usuario.user.id
            }

            const response = await axios.post(`${baseURL}auth/refresh-token`, payload);
            const { data } = response
            usuario.access_token = data.access_token
            localStorage.setItem('user', JSON.stringify(usuario));

            axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;

        } catch (error) {
            console.log(error)
        }
    }

    toast.error(menssage, {
        theme: "dark",
        transition: Flip,
    });

    return Promise.reject(menssage);
})