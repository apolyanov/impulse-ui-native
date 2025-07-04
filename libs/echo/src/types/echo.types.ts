export interface EchoEvents {
  placeholder: unknown;
}

export type EchoEventNames = keyof EchoEvents;

export interface EchoListenerEntry {
  id: string;
  callback: (data: unknown) => void;
}
