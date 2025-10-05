export type FlyoutKey = string;

export type FlyoutOpenProps<Props extends object = {}> = {
  title?: string;
  placement?: "top" | "bottom";
} & Props;
