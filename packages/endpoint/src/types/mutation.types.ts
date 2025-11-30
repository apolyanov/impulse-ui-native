import { UseMutationResult } from '@tanstack/react-query';
import { BaseVariables } from './request.types';

export interface MutationFunction<
	TData,
	TError,
	TVariables extends BaseVariables,
> {
	(): UseMutationResult<TData, TError, TVariables>;
	execute: (args: TVariables) => Promise<TData>;
}
