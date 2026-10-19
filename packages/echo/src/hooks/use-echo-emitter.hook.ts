import { EchoInstance } from "../singletons";
import { EchoEventNames, EchoEvents } from "../types";

export function useEchoEmitter<Event extends EchoEventNames>(
  event: Event,
  data: EchoEvents[Event],
) {
  return EchoInstance.emit(event, data);
}
