import { createIcon } from "../../hocs/create-icon.hoc";
import { LassoBoldIcon } from "../bold/lasso-bold.icon";
import { LassoDuotoneIcon } from "../duotone/lasso-duotone.icon";
import { LassoFillIcon } from "../fill/lasso-fill.icon";
import { LassoLightIcon } from "../light/lasso-light.icon";
import { LassoRegularIcon } from "../regular/lasso-regular.icon";
import { LassoThinIcon } from "../thin/lasso-thin.icon";

export const LassoIcon = createIcon("Lasso", {
  bold: LassoBoldIcon,
  duotone: LassoDuotoneIcon,
  fill: LassoFillIcon,
  light: LassoLightIcon,
  regular: LassoRegularIcon,
  thin: LassoThinIcon,
});
