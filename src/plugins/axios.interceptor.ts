import type { App } from "vue";
import type { AxiosError,AxiosResponse } from "axios";
import apiClient from "../utils/axios";
export default {
    install: (app: App): void => {
        app.config.globalProperties.$http = apiClient;
        const $http = app.config.globalProperties.$http;
        $http.interceptors.request.use(
            function (config: any) {
                // Do something before request is sent
                return config;
            },
            function (error: AxiosError) {
                // Do something with request error
                return Promise.reject(error);
            }
        );

        $http.interceptors.response.use(
            function (response: AxiosResponse) {
                // Do something with response data
                return response;
            },
            function (error: AxiosError) {
                // Do something with response error
                return Promise.reject(error);
            }
        );

        app.provide('$fetch', $http)
    }
};
