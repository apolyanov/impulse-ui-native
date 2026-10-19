import { createIcon } from "../../hocs/create-icon.hoc";
import { HexagonBoldIcon } from "../bold/hexagon-bold.icon";
import { HexagonDuotoneIcon } from "../duotone/hexagon-duotone.icon";
import { HexagonFillIcon } from "../fill/hexagon-fill.icon";
import { HexagonLightIcon } from "../light/hexagon-light.icon";
import { HexagonRegularIcon } from "../regular/hexagon-regular.icon";
import { HexagonThinIcon } from "../thin/hexagon-thin.icon";

export const HexagonIcon = createIcon("Hexagon", {
  bold: HexagonBoldIcon,
  duotone: HexagonDuotoneIcon,
  fill: HexagonFillIcon,
  light: HexagonLightIcon,
  regular: HexagonRegularIcon,
  thin: HexagonThinIcon,
});
