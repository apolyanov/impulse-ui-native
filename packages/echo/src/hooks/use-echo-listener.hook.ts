import { useEffect } from "react";

import { EchoInstance } from "../singletons/echo.singleton";
import { EchoEventNames, EchoEvents } from "../types";

export function useEchoListener<Event extends EchoEventNames>(
  event: Event,
  callback: (data: EchoEvents[Event]) => void
) {
  useEffect(() => {
    return EchoInstance.subscribe(event, callback);
  }, [callback, event]);
}
