import { createIcon } from "../../hocs/create-icon.hoc";
import { ArchiveBoldIcon } from "../bold/archive-bold.icon";
import { ArchiveDuotoneIcon } from "../duotone/archive-duotone.icon";
import { ArchiveFillIcon } from "../fill/archive-fill.icon";
import { ArchiveLightIcon } from "../light/archive-light.icon";
import { ArchiveRegularIcon } from "../regular/archive-regular.icon";
import { ArchiveThinIcon } from "../thin/archive-thin.icon";

export const ArchiveIcon = createIcon("Archive", {
  bold: ArchiveBoldIcon,
  duotone: ArchiveDuotoneIcon,
  fill: ArchiveFillIcon,
  light: ArchiveLightIcon,
  regular: ArchiveRegularIcon,
  thin: ArchiveThinIcon,
});
