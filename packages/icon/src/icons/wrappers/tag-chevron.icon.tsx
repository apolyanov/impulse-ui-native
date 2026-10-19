import { createIcon } from "../../hocs/create-icon.hoc";
import { TagChevronBoldIcon } from "../bold/tag-chevron-bold.icon";
import { TagChevronDuotoneIcon } from "../duotone/tag-chevron-duotone.icon";
import { TagChevronFillIcon } from "../fill/tag-chevron-fill.icon";
import { TagChevronLightIcon } from "../light/tag-chevron-light.icon";
import { TagChevronRegularIcon } from "../regular/tag-chevron-regular.icon";
import { TagChevronThinIcon } from "../thin/tag-chevron-thin.icon";

export const TagChevronIcon = createIcon("TagChevron", {
  bold: TagChevronBoldIcon,
  duotone: TagChevronDuotoneIcon,
  fill: TagChevronFillIcon,
  light: TagChevronLightIcon,
  regular: TagChevronRegularIcon,
  thin: TagChevronThinIcon,
});
