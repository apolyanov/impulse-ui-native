import type { AxiosRequestConfig } from 'axios';
import type { QueryParams } from '../types';

export const ParamsSerializer: AxiosRequestConfig['paramsSerializer'] = {
	serialize: (params: QueryParams) => {
		const searchParams = new URLSearchParams();

		for (const key in params) {
			const value = params[key];

			if (value === null || value === undefined) continue;

			if (Array.isArray(value)) {
				value.forEach((v) => searchParams.append(key, String(v)));
			} else {
				searchParams.set(key, String(value));
			}
		}

		return searchParams.toString(); // a=1&b=test&c=3
	},
};
