import { createIcon } from "../../hocs/create-icon.hoc";
import { FileIniBoldIcon } from "../bold/file-ini-bold.icon";
import { FileIniDuotoneIcon } from "../duotone/file-ini-duotone.icon";
import { FileIniFillIcon } from "../fill/file-ini-fill.icon";
import { FileIniLightIcon } from "../light/file-ini-light.icon";
import { FileIniRegularIcon } from "../regular/file-ini-regular.icon";
import { FileIniThinIcon } from "../thin/file-ini-thin.icon";

export const FileIniIcon = createIcon("FileIni", {
  bold: FileIniBoldIcon,
  duotone: FileIniDuotoneIcon,
  fill: FileIniFillIcon,
  light: FileIniLightIcon,
  regular: FileIniRegularIcon,
  thin: FileIniThinIcon,
});
