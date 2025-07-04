import { useEffect } from 'react';
import { EchoEventNames, EchoEvents } from '../types';
import { EchoInstance } from '../singletons/echo.singleton';

export function useEchoListener<Event extends EchoEventNames>(
  event: Event,
  callback: (data: EchoEvents[Event]) => void,
) {
  useEffect(() => {
    return EchoInstance.subscribe(event, callback);
  }, [callback, event]);
}
