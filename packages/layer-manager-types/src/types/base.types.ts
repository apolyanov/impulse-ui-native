import { ComponentType } from "react";

export interface BaseRegistrationProps<Props extends object = {}> {
  id: string;
  title?: RegistrationTitle<Props>;
  Content: ComponentType<Props>;
  onClose?: () => void;
  onCloseFinished?: () => void;
  onOpen?: () => void;
  onOpenFinished?: () => void;
}

export type RegistrationTitle<Props extends object = {}> =
  | string
  | ((props: Props) => string | undefined);
