import { createIcon } from "../../hocs/create-icon.hoc";
import { EngineBoldIcon } from "../bold/engine-bold.icon";
import { EngineDuotoneIcon } from "../duotone/engine-duotone.icon";
import { EngineFillIcon } from "../fill/engine-fill.icon";
import { EngineLightIcon } from "../light/engine-light.icon";
import { EngineRegularIcon } from "../regular/engine-regular.icon";
import { EngineThinIcon } from "../thin/engine-thin.icon";

export const EngineIcon = createIcon("Engine", {
  bold: EngineBoldIcon,
  duotone: EngineDuotoneIcon,
  fill: EngineFillIcon,
  light: EngineLightIcon,
  regular: EngineRegularIcon,
  thin: EngineThinIcon,
});
