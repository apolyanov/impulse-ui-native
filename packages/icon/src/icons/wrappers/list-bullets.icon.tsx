import { createIcon } from "../../hocs/create-icon.hoc";
import { ListBulletsBoldIcon } from "../bold/list-bullets-bold.icon";
import { ListBulletsDuotoneIcon } from "../duotone/list-bullets-duotone.icon";
import { ListBulletsFillIcon } from "../fill/list-bullets-fill.icon";
import { ListBulletsLightIcon } from "../light/list-bullets-light.icon";
import { ListBulletsRegularIcon } from "../regular/list-bullets-regular.icon";
import { ListBulletsThinIcon } from "../thin/list-bullets-thin.icon";

export const ListBulletsIcon = createIcon("ListBullets", {
  bold: ListBulletsBoldIcon,
  duotone: ListBulletsDuotoneIcon,
  fill: ListBulletsFillIcon,
  light: ListBulletsLightIcon,
  regular: ListBulletsRegularIcon,
  thin: ListBulletsThinIcon,
});
