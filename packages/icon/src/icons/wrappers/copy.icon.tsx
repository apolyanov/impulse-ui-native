import { createIcon } from "../../hocs/create-icon.hoc";
import { CopyBoldIcon } from "../bold/copy-bold.icon";
import { CopyDuotoneIcon } from "../duotone/copy-duotone.icon";
import { CopyFillIcon } from "../fill/copy-fill.icon";
import { CopyLightIcon } from "../light/copy-light.icon";
import { CopyRegularIcon } from "../regular/copy-regular.icon";
import { CopyThinIcon } from "../thin/copy-thin.icon";

export const CopyIcon = createIcon("Copy", {
  bold: CopyBoldIcon,
  duotone: CopyDuotoneIcon,
  fill: CopyFillIcon,
  light: CopyLightIcon,
  regular: CopyRegularIcon,
  thin: CopyThinIcon,
});
