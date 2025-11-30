import { useQuery, type QueryOptions } from '@tanstack/react-query';
import type { Axios, AxiosError } from 'axios';
import type {
	BaseVariables,
	QueryEndpointRequest,
	QueryFunction,
} from '../types';
import { ParamsSerializer } from '../utils';

export function createQueryFactory(client: Axios) {
	return function createQuery<
		TData,
		TError = AxiosError,
		TVariables extends BaseVariables = BaseVariables,
	>(
		config: QueryEndpointRequest<TData, TError>,
		options?: QueryOptions<TData, TError>
	): QueryFunction<TData, TError, TVariables> {
		const request = async (variables: TVariables) =>
			client.get<TData, TData, TError>(config.path, {
				params: variables.params,
				paramsSerializer: ParamsSerializer,
			});

		const use: QueryFunction<TData, TError, TVariables> = function (
			variables: TVariables
		) {
			return useQuery<TData, TError>({
				queryKey: config.key,
				queryFn: async () => request(variables),
				...options,
			});
		};

		use.execute = request;

		return use;
	};
}
