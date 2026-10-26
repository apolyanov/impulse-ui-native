# @impulse-ui-native/echo: capability guide

Send typed events between disconnected React consumers.

## Setup

- React; no visual provider.

## Capabilities

- Shared EchoInstance plus emitter/listener hooks and typed event contracts.

## Boundaries and composition

- An event bus is not persistent application state; component subscriptions clean up on unmount.
- Inspect EchoEvents before inventing event names or payloads.

Exact contracts: [API reference](../api/echo.md). Machine facts: [package JSON](echo.json) or [full catalog](../capabilities.json).

## Recipes

- [data-service](../recipes.md#data-service)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

This package has no directly owned visual components in its public root; use its exports below. Toolkit re-exports the owning packages.

## Public exports

- `EchoEventNames` (type)
- `EchoEvents` (type)
- `EchoInstance` (value)
- `EchoListenerEntry` (type)
- `useEchoEmitter` (hook)
  - `<Event extends EchoEventNames>(event: Event, data: EchoEvents[Event]): void`
- `useEchoListener` (hook)
  - `<Event extends EchoEventNames>(event: Event, callback: (data: EchoEvents[Event]) => void): void`

### EchoInstance methods

- `emit`
  - `<Event extends EchoEventNames>(event: Event, data: EchoEvents[Event]): void`
- `subscribe`
  - `<Event extends EchoEventNames>(event: Event, callback: (data: EchoEvents[Event]) => void): () => void`
