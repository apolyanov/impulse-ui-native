import { createIcon } from "../../hocs/create-icon.hoc";
import { FlaskBoldIcon } from "../bold/flask-bold.icon";
import { FlaskDuotoneIcon } from "../duotone/flask-duotone.icon";
import { FlaskFillIcon } from "../fill/flask-fill.icon";
import { FlaskLightIcon } from "../light/flask-light.icon";
import { FlaskRegularIcon } from "../regular/flask-regular.icon";
import { FlaskThinIcon } from "../thin/flask-thin.icon";

export const FlaskIcon = createIcon("Flask", {
  bold: FlaskBoldIcon,
  duotone: FlaskDuotoneIcon,
  fill: FlaskFillIcon,
  light: FlaskLightIcon,
  regular: FlaskRegularIcon,
  thin: FlaskThinIcon,
});
