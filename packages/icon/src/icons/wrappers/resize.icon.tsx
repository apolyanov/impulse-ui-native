import { createIcon } from "../../hocs/create-icon.hoc";
import { ResizeBoldIcon } from "../bold/resize-bold.icon";
import { ResizeDuotoneIcon } from "../duotone/resize-duotone.icon";
import { ResizeFillIcon } from "../fill/resize-fill.icon";
import { ResizeLightIcon } from "../light/resize-light.icon";
import { ResizeRegularIcon } from "../regular/resize-regular.icon";
import { ResizeThinIcon } from "../thin/resize-thin.icon";

export const ResizeIcon = createIcon("Resize", {
  bold: ResizeBoldIcon,
  duotone: ResizeDuotoneIcon,
  fill: ResizeFillIcon,
  light: ResizeLightIcon,
  regular: ResizeRegularIcon,
  thin: ResizeThinIcon,
});
