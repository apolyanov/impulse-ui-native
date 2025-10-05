import { ComponentType, PropsWithChildren } from "react";
import { BaseRegistrationProps } from "./base.types";

export interface LayerComponentBaseProps {
  id: string;
  layer: number;
  open?: boolean;
  title?: string;
  Content?: ComponentType<any>;
  onClose?: (id: string) => void;
  onCloseFinished?: (id: string) => void;
  onOpen?: (id: string) => void;
  onOpenFinished?: (id: string) => void;
}

export interface Layer<Props extends object = {}> {
  id: string;
  props: Props;
  layerProps: BaseRegistrationProps<Props>;
  Component: ComponentType<PropsWithChildren<LayerComponentBaseProps & Props>>;
}

export interface OpenLayerParams<Props extends object = {}> {
  id: string;
  props: Props;
  registrationProps: BaseRegistrationProps<Props>;
  Component: ComponentType<LayerComponentBaseProps>;
}
