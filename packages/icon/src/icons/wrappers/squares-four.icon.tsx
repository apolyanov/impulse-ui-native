import { createIcon } from "../../hocs/create-icon.hoc";
import { SquaresFourBoldIcon } from "../bold/squares-four-bold.icon";
import { SquaresFourDuotoneIcon } from "../duotone/squares-four-duotone.icon";
import { SquaresFourFillIcon } from "../fill/squares-four-fill.icon";
import { SquaresFourLightIcon } from "../light/squares-four-light.icon";
import { SquaresFourRegularIcon } from "../regular/squares-four-regular.icon";
import { SquaresFourThinIcon } from "../thin/squares-four-thin.icon";

export const SquaresFourIcon = createIcon("SquaresFour", {
  bold: SquaresFourBoldIcon,
  duotone: SquaresFourDuotoneIcon,
  fill: SquaresFourFillIcon,
  light: SquaresFourLightIcon,
  regular: SquaresFourRegularIcon,
  thin: SquaresFourThinIcon,
});
