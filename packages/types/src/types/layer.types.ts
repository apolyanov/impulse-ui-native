import { ComponentType, PropsWithChildren } from "react";

export interface BaseRegistrationProps<Props extends object = {}> {
  id: string;
  title?: RegistrationTitle<Props>;
  unique?: boolean;
  Content: ComponentType<Props>;
  onClose?: () => void;
  onCloseFinished?: () => void;
  onOpen?: () => void;
  onOpenFinished?: () => void;
}

export type RegistrationTitle<Props extends object = {}> =
  | string
  | ((props: Props) => string | undefined);

export interface LayerComponentBaseProps {
  id: string;
  layer?: number;
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
  LayerComponent: ComponentType<
    PropsWithChildren<LayerComponentBaseProps & Props>
  >;
}

export interface OpenLayerParams<Props extends object = {}> {
  id: string;
  props: Props;
  registrationProps: BaseRegistrationProps<Props>;
  Content: ComponentType<LayerComponentBaseProps & Props>;
}
