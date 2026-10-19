import { createIcon } from "../../hocs/create-icon.hoc";
import { TagBoldIcon } from "../bold/tag-bold.icon";
import { TagDuotoneIcon } from "../duotone/tag-duotone.icon";
import { TagFillIcon } from "../fill/tag-fill.icon";
import { TagLightIcon } from "../light/tag-light.icon";
import { TagRegularIcon } from "../regular/tag-regular.icon";
import { TagThinIcon } from "../thin/tag-thin.icon";

export const TagIcon = createIcon("Tag", {
  bold: TagBoldIcon,
  duotone: TagDuotoneIcon,
  fill: TagFillIcon,
  light: TagLightIcon,
  regular: TagRegularIcon,
  thin: TagThinIcon,
});
