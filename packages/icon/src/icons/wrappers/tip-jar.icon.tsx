import { createIcon } from "../../hocs/create-icon.hoc";
import { TipJarBoldIcon } from "../bold/tip-jar-bold.icon";
import { TipJarDuotoneIcon } from "../duotone/tip-jar-duotone.icon";
import { TipJarFillIcon } from "../fill/tip-jar-fill.icon";
import { TipJarLightIcon } from "../light/tip-jar-light.icon";
import { TipJarRegularIcon } from "../regular/tip-jar-regular.icon";
import { TipJarThinIcon } from "../thin/tip-jar-thin.icon";

export const TipJarIcon = createIcon("TipJar", {
  bold: TipJarBoldIcon,
  duotone: TipJarDuotoneIcon,
  fill: TipJarFillIcon,
  light: TipJarLightIcon,
  regular: TipJarRegularIcon,
  thin: TipJarThinIcon,
});
