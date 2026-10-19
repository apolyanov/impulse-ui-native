import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsMergeBoldIcon } from "../bold/arrows-merge-bold.icon";
import { ArrowsMergeDuotoneIcon } from "../duotone/arrows-merge-duotone.icon";
import { ArrowsMergeFillIcon } from "../fill/arrows-merge-fill.icon";
import { ArrowsMergeLightIcon } from "../light/arrows-merge-light.icon";
import { ArrowsMergeRegularIcon } from "../regular/arrows-merge-regular.icon";
import { ArrowsMergeThinIcon } from "../thin/arrows-merge-thin.icon";

export const ArrowsMergeIcon = createIcon("ArrowsMerge", {
  bold: ArrowsMergeBoldIcon,
  duotone: ArrowsMergeDuotoneIcon,
  fill: ArrowsMergeFillIcon,
  light: ArrowsMergeLightIcon,
  regular: ArrowsMergeRegularIcon,
  thin: ArrowsMergeThinIcon,
});
