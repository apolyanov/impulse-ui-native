import { createIcon } from "../../hocs/create-icon.hoc";
import { GraphBoldIcon } from "../bold/graph-bold.icon";
import { GraphDuotoneIcon } from "../duotone/graph-duotone.icon";
import { GraphFillIcon } from "../fill/graph-fill.icon";
import { GraphLightIcon } from "../light/graph-light.icon";
import { GraphRegularIcon } from "../regular/graph-regular.icon";
import { GraphThinIcon } from "../thin/graph-thin.icon";

export const GraphIcon = createIcon("Graph", {
  bold: GraphBoldIcon,
  duotone: GraphDuotoneIcon,
  fill: GraphFillIcon,
  light: GraphLightIcon,
  regular: GraphRegularIcon,
  thin: GraphThinIcon,
});
