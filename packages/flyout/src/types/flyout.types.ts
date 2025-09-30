export interface FlyoutProps {
  id: string;
  open?: boolean;
  layer: number;
  isTop?: boolean;
  placement?: "top" | "bottom";
  onCloseFinished?: () => void;
}
