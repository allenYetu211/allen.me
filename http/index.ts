import Axios, { AxiosInstance, AxiosResponse } from 'axios';

import config from '@config/api.config';

// import { IConfigOrigin, IGetParams } from 'globals/interfaces/http.interface';

interface HTTPPARAMS {
	url: string;
	data?: any;
	params?: any;
}

export type Method =
	| 'get'
	| 'GET'
	| 'delete'
	| 'DELETE'
	| 'head'
	| 'HEAD'
	| 'options'
	| 'OPTIONS'
	| 'post'
	| 'POST'
	| 'put'
	| 'PUT'
	| 'patch'
	| 'PATCH';
class HttpClient {
	public axios: any;

	constructor() {
		this.axios = Axios.create({
			timeout: 10000,
		});

		this.axios.interceptors.response.use((response: AxiosResponse) => {
			if (response.data.status === 'Success') {
				return Promise.resolve(response.data.data);
			}
			return response.status;
		}, (error) => {
      return Promise.reject(error)
    });
	}

	public async get(param: HTTPPARAMS) {
		return this.AXIOSHTTP('GET', param);
	}

	public async post(param: HTTPPARAMS) {
		return this.AXIOSHTTP('POST', param);
	}

	public async put(param: HTTPPARAMS) {
		return this.AXIOSHTTP('PUT', param);
	}

	public async delete(param: HTTPPARAMS) {
		return this.AXIOSHTTP('DELETE', param);
	}

	private async AXIOSHTTP(method: Method, h: HTTPPARAMS): Promise<any> {
		const { url, params, data } = h;
		return this.axios({
			baseURL: config.baseURL,
			url,
			method,
			params,
			data,
			// withCredentials: true,
		});
	}
}

export default new HttpClient();
