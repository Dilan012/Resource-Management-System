import axios from "axios";
import { useAuth } from "../authProvider";
import { useEffect } from "react";

export const axiosInstance = axios.create({
    baseURL: '/api',
    timeout: 15000,
});

const unAuthorized = (setUser) => {
    setUser(null);
};

const AxiosInterceptor = () => {
    const { setUser } = useAuth();

    useEffect(() => {
        const interceptor = axiosInstance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response && error.response.status === 401) {
                    unAuthorized(setUser);
                }
                return Promise.reject(error);
            }
        );

        // Cleanup the interceptor
        return () => {
            axiosInstance.interceptors.response.eject(interceptor);
        };
    }, [setUser]);

    return null; 
};

export default AxiosInterceptor;
