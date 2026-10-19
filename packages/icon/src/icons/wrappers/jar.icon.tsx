import { createIcon } from "../../hocs/create-icon.hoc";
import { JarBoldIcon } from "../bold/jar-bold.icon";
import { JarDuotoneIcon } from "../duotone/jar-duotone.icon";
import { JarFillIcon } from "../fill/jar-fill.icon";
import { JarLightIcon } from "../light/jar-light.icon";
import { JarRegularIcon } from "../regular/jar-regular.icon";
import { JarThinIcon } from "../thin/jar-thin.icon";

export const JarIcon = createIcon("Jar", {
  bold: JarBoldIcon,
  duotone: JarDuotoneIcon,
  fill: JarFillIcon,
  light: JarLightIcon,
  regular: JarRegularIcon,
  thin: JarThinIcon,
});
