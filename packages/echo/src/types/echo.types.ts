import { OpenLayerParams } from "@impulse-ui-native/layer-manager-types";

export interface EchoEvents {
  placeholder: unknown;
  addLayer: OpenLayerParams<any>;
  removeLayer: {
    id: string;
  };
}

export type EchoEventNames = keyof EchoEvents;

export interface EchoListenerEntry {
  id: string;
  callback: (data: any) => void;
}
