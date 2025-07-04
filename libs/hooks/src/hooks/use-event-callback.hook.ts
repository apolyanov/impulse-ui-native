import { useCallback, useRef } from 'react';

export function useEventCallback<Handler extends (...args: any[]) => any>(
  handler: Handler,
) {
  const handlerRef = useRef<Handler>(handler);

  handlerRef.current = handler;

  return useCallback((...args: Parameters<Handler>): ReturnType<Handler> => {
    return handlerRef.current(...args);
  }, []);
}
