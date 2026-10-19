import { createIcon } from "../../hocs/create-icon.hoc";
import { BezierCurveBoldIcon } from "../bold/bezier-curve-bold.icon";
import { BezierCurveDuotoneIcon } from "../duotone/bezier-curve-duotone.icon";
import { BezierCurveFillIcon } from "../fill/bezier-curve-fill.icon";
import { BezierCurveLightIcon } from "../light/bezier-curve-light.icon";
import { BezierCurveRegularIcon } from "../regular/bezier-curve-regular.icon";
import { BezierCurveThinIcon } from "../thin/bezier-curve-thin.icon";

export const BezierCurveIcon = createIcon("BezierCurve", {
  bold: BezierCurveBoldIcon,
  duotone: BezierCurveDuotoneIcon,
  fill: BezierCurveFillIcon,
  light: BezierCurveLightIcon,
  regular: BezierCurveRegularIcon,
  thin: BezierCurveThinIcon,
});
