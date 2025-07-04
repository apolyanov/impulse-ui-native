import { EchoInstance } from '../singletons';
import { EchoEventNames, EchoEvents } from '../types';
import { useEventCallback } from './use-event-callback.hook';

export function useEchoEmitter<Event extends EchoEventNames>(
  event: Event,
  data: EchoEvents[Event],
) {
  return useEventCallback(() => {
    EchoInstance.emit(event, data);
  });
}
