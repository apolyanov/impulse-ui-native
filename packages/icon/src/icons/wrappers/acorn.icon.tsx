import { createIcon } from "../../hocs/create-icon.hoc";
import { AcornBoldIcon } from "../bold/acorn-bold.icon";
import { AcornDuotoneIcon } from "../duotone/acorn-duotone.icon";
import { AcornFillIcon } from "../fill/acorn-fill.icon";
import { AcornLightIcon } from "../light/acorn-light.icon";
import { AcornRegularIcon } from "../regular/acorn-regular.icon";
import { AcornThinIcon } from "../thin/acorn-thin.icon";

export const AcornIcon = createIcon("Acorn", {
  bold: AcornBoldIcon,
  duotone: AcornDuotoneIcon,
  fill: AcornFillIcon,
  light: AcornLightIcon,
  regular: AcornRegularIcon,
  thin: AcornThinIcon,
});
