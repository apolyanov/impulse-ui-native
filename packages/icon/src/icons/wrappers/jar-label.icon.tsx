import { createIcon } from "../../hocs/create-icon.hoc";
import { JarLabelBoldIcon } from "../bold/jar-label-bold.icon";
import { JarLabelDuotoneIcon } from "../duotone/jar-label-duotone.icon";
import { JarLabelFillIcon } from "../fill/jar-label-fill.icon";
import { JarLabelLightIcon } from "../light/jar-label-light.icon";
import { JarLabelRegularIcon } from "../regular/jar-label-regular.icon";
import { JarLabelThinIcon } from "../thin/jar-label-thin.icon";

export const JarLabelIcon = createIcon("JarLabel", {
  bold: JarLabelBoldIcon,
  duotone: JarLabelDuotoneIcon,
  fill: JarLabelFillIcon,
  light: JarLabelLightIcon,
  regular: JarLabelRegularIcon,
  thin: JarLabelThinIcon,
});
