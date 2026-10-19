import { createIcon } from "../../hocs/create-icon.hoc";
import { BracketsCurlyBoldIcon } from "../bold/brackets-curly-bold.icon";
import { BracketsCurlyDuotoneIcon } from "../duotone/brackets-curly-duotone.icon";
import { BracketsCurlyFillIcon } from "../fill/brackets-curly-fill.icon";
import { BracketsCurlyLightIcon } from "../light/brackets-curly-light.icon";
import { BracketsCurlyRegularIcon } from "../regular/brackets-curly-regular.icon";
import { BracketsCurlyThinIcon } from "../thin/brackets-curly-thin.icon";

export const BracketsCurlyIcon = createIcon("BracketsCurly", {
  bold: BracketsCurlyBoldIcon,
  duotone: BracketsCurlyDuotoneIcon,
  fill: BracketsCurlyFillIcon,
  light: BracketsCurlyLightIcon,
  regular: BracketsCurlyRegularIcon,
  thin: BracketsCurlyThinIcon,
});
