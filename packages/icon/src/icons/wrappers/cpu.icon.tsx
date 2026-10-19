import { createIcon } from "../../hocs/create-icon.hoc";
import { CpuBoldIcon } from "../bold/cpu-bold.icon";
import { CpuDuotoneIcon } from "../duotone/cpu-duotone.icon";
import { CpuFillIcon } from "../fill/cpu-fill.icon";
import { CpuLightIcon } from "../light/cpu-light.icon";
import { CpuRegularIcon } from "../regular/cpu-regular.icon";
import { CpuThinIcon } from "../thin/cpu-thin.icon";

export const CpuIcon = createIcon("Cpu", {
  bold: CpuBoldIcon,
  duotone: CpuDuotoneIcon,
  fill: CpuFillIcon,
  light: CpuLightIcon,
  regular: CpuRegularIcon,
  thin: CpuThinIcon,
});
