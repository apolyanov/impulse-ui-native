import { createIcon } from "../../hocs/create-icon.hoc";
import { CouchBoldIcon } from "../bold/couch-bold.icon";
import { CouchDuotoneIcon } from "../duotone/couch-duotone.icon";
import { CouchFillIcon } from "../fill/couch-fill.icon";
import { CouchLightIcon } from "../light/couch-light.icon";
import { CouchRegularIcon } from "../regular/couch-regular.icon";
import { CouchThinIcon } from "../thin/couch-thin.icon";

export const CouchIcon = createIcon("Couch", {
  bold: CouchBoldIcon,
  duotone: CouchDuotoneIcon,
  fill: CouchFillIcon,
  light: CouchLightIcon,
  regular: CouchRegularIcon,
  thin: CouchThinIcon,
});
