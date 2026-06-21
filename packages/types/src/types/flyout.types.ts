export type FlyoutPlacement = "top" | "bottom";
export type FlyoutKey = string;

export type FlyoutOpenProps<Props extends object = {}> = {
  title?: string;
  placement?: FlyoutPlacement;
} & Props;
