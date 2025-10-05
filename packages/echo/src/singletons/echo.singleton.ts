import { EchoEventNames, EchoEvents, EchoListenerEntry } from "../types";

class Echo {
  private subscribers: Map<EchoEventNames, EchoListenerEntry[]>;

  constructor() {
    this.subscribers = new Map();
  }

  emit<Event extends EchoEventNames>(event: Event, data: EchoEvents[Event]) {
    this.subscribers.get(event)?.forEach((subscriber) => {
      subscriber.callback(data);
    });
  }

  subscribe<Event extends EchoEventNames>(
    event: Event,
    callback: (data: EchoEvents[Event]) => void
  ) {
    const subscriberId = this.generateId();

    if (this.subscribers.has(event)) {
      const listeners = this.subscribers.get(event);

      listeners?.push({ id: subscriberId, callback });
    } else {
      this.subscribers.set(event, [{ id: subscriberId, callback }]);
    }

    return () => {
      this.unsubscribe(event, subscriberId);
    };
  }

  private unsubscribe<Event extends EchoEventNames>(event: Event, id: string) {
    if (this.subscribers.has(event)) {
      this.subscribers.set(
        event,
        this.subscribers.get(event)?.filter((entry) => entry.id !== id) ?? []
      );
    }
  }

  private generateId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}

export const EchoInstance = new Echo();
