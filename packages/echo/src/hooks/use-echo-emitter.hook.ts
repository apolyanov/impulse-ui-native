import { useEventCallback } from "@impulse-ui-native/core";

import { EchoInstance } from "../singletons";
import { EchoEventNames, EchoEvents } from "../types";

export function useEchoEmitter<Event extends EchoEventNames>(
  event: Event,
  data: EchoEvents[Event]
) {
  return useEventCallback(() => {
    EchoInstance.emit(event, data);
  });
}
