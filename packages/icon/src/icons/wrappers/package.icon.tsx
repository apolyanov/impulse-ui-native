import { createIcon } from "../../hocs/create-icon.hoc";
import { PackageBoldIcon } from "../bold/package-bold.icon";
import { PackageDuotoneIcon } from "../duotone/package-duotone.icon";
import { PackageFillIcon } from "../fill/package-fill.icon";
import { PackageLightIcon } from "../light/package-light.icon";
import { PackageRegularIcon } from "../regular/package-regular.icon";
import { PackageThinIcon } from "../thin/package-thin.icon";

export const PackageIcon = createIcon("Package", {
  bold: PackageBoldIcon,
  duotone: PackageDuotoneIcon,
  fill: PackageFillIcon,
  light: PackageLightIcon,
  regular: PackageRegularIcon,
  thin: PackageThinIcon,
});
