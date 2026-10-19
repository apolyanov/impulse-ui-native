import { createIcon } from "../../hocs/create-icon.hoc";
import { CastleTurretBoldIcon } from "../bold/castle-turret-bold.icon";
import { CastleTurretDuotoneIcon } from "../duotone/castle-turret-duotone.icon";
import { CastleTurretFillIcon } from "../fill/castle-turret-fill.icon";
import { CastleTurretLightIcon } from "../light/castle-turret-light.icon";
import { CastleTurretRegularIcon } from "../regular/castle-turret-regular.icon";
import { CastleTurretThinIcon } from "../thin/castle-turret-thin.icon";

export const CastleTurretIcon = createIcon("CastleTurret", {
  bold: CastleTurretBoldIcon,
  duotone: CastleTurretDuotoneIcon,
  fill: CastleTurretFillIcon,
  light: CastleTurretLightIcon,
  regular: CastleTurretRegularIcon,
  thin: CastleTurretThinIcon,
});
