import { createIcon } from "../../hocs/create-icon.hoc";
import { TornadoBoldIcon } from "../bold/tornado-bold.icon";
import { TornadoDuotoneIcon } from "../duotone/tornado-duotone.icon";
import { TornadoFillIcon } from "../fill/tornado-fill.icon";
import { TornadoLightIcon } from "../light/tornado-light.icon";
import { TornadoRegularIcon } from "../regular/tornado-regular.icon";
import { TornadoThinIcon } from "../thin/tornado-thin.icon";

export const TornadoIcon = createIcon("Tornado", {
  bold: TornadoBoldIcon,
  duotone: TornadoDuotoneIcon,
  fill: TornadoFillIcon,
  light: TornadoLightIcon,
  regular: TornadoRegularIcon,
  thin: TornadoThinIcon,
});
