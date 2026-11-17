export interface EndpointCallbacks<TData, TError> {
  onSuccess?: (data: TData) => Promise<void> | void;
  onError?: (error: TError) => Promise<void> | void;
}
