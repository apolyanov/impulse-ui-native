import { createIcon } from "../../hocs/create-icon.hoc";
import { MemoryBoldIcon } from "../bold/memory-bold.icon";
import { MemoryDuotoneIcon } from "../duotone/memory-duotone.icon";
import { MemoryFillIcon } from "../fill/memory-fill.icon";
import { MemoryLightIcon } from "../light/memory-light.icon";
import { MemoryRegularIcon } from "../regular/memory-regular.icon";
import { MemoryThinIcon } from "../thin/memory-thin.icon";

export const MemoryIcon = createIcon("Memory", {
  bold: MemoryBoldIcon,
  duotone: MemoryDuotoneIcon,
  fill: MemoryFillIcon,
  light: MemoryLightIcon,
  regular: MemoryRegularIcon,
  thin: MemoryThinIcon,
});
