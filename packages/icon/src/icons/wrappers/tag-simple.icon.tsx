import { createIcon } from "../../hocs/create-icon.hoc";
import { TagSimpleBoldIcon } from "../bold/tag-simple-bold.icon";
import { TagSimpleDuotoneIcon } from "../duotone/tag-simple-duotone.icon";
import { TagSimpleFillIcon } from "../fill/tag-simple-fill.icon";
import { TagSimpleLightIcon } from "../light/tag-simple-light.icon";
import { TagSimpleRegularIcon } from "../regular/tag-simple-regular.icon";
import { TagSimpleThinIcon } from "../thin/tag-simple-thin.icon";

export const TagSimpleIcon = createIcon("TagSimple", {
  bold: TagSimpleBoldIcon,
  duotone: TagSimpleDuotoneIcon,
  fill: TagSimpleFillIcon,
  light: TagSimpleLightIcon,
  regular: TagSimpleRegularIcon,
  thin: TagSimpleThinIcon,
});
