import { createIcon } from "../../hocs/create-icon.hoc";
import { SynagogueBoldIcon } from "../bold/synagogue-bold.icon";
import { SynagogueDuotoneIcon } from "../duotone/synagogue-duotone.icon";
import { SynagogueFillIcon } from "../fill/synagogue-fill.icon";
import { SynagogueLightIcon } from "../light/synagogue-light.icon";
import { SynagogueRegularIcon } from "../regular/synagogue-regular.icon";
import { SynagogueThinIcon } from "../thin/synagogue-thin.icon";

export const SynagogueIcon = createIcon("Synagogue", {
  bold: SynagogueBoldIcon,
  duotone: SynagogueDuotoneIcon,
  fill: SynagogueFillIcon,
  light: SynagogueLightIcon,
  regular: SynagogueRegularIcon,
  thin: SynagogueThinIcon,
});
