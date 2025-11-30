import { UseQueryResult } from '@tanstack/react-query';

export interface QueryFunction<TData, TError, TVariables> {
	(variables: TVariables): UseQueryResult<TData, TError>;
	execute: (args: TVariables) => Promise<TData>;
}
