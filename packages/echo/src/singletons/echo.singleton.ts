import { EchoEventNames, EchoListenerEntry, EchoEvents } from "../types";

class Echo {
  private subsbribers: Map<EchoEventNames, EchoListenerEntry[]>;

  constructor() {
    this.subsbribers = new Map();
  }

  emit<Event extends EchoEventNames>(event: Event, data: EchoEvents[Event]) {
    this.subsbribers.get(event)?.forEach((subscriber) => {
      subscriber.callback(data);
    });
  }

  subscribe<Event extends EchoEventNames>(
    event: Event,
    callback: (data: EchoEvents[Event]) => void
  ) {
    const subscriberId = this.generateId();

    if (this.subsbribers.has(event)) {
      const listeners = this.subsbribers.get(event);

      listeners?.push({ id: subscriberId, callback });
    } else {
      this.subsbribers.set(event, [{ id: subscriberId, callback }]);
    }

    return () => {
      this.unsubscribe(event, subscriberId);
    };
  }

  private unsubscribe<Event extends EchoEventNames>(event: Event, id: string) {
    if (this.subsbribers.has(event)) {
      this.subsbribers.set(
        event,
        this.subsbribers.get(event)?.filter((entry) => entry.id !== id) ?? []
      );
    }
  }

  private generateId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}

export const EchoInstance = new Echo();
