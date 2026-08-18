import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BezierCurveBoldIcon } from "../bold/bezier-curve-bold.icon";
import { BezierCurveDuotoneIcon } from "../duotone/bezier-curve-duotone.icon";
import { BezierCurveFillIcon } from "../fill/bezier-curve-fill.icon";
import { BezierCurveLightIcon } from "../light/bezier-curve-light.icon";
import { BezierCurveRegularIcon } from "../regular/bezier-curve-regular.icon";
import { BezierCurveThinIcon } from "../thin/bezier-curve-thin.icon";

export const BezierCurveIcon = memo(function BezierCurve(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BezierCurveBoldIcon,
      duotone: BezierCurveDuotoneIcon,
      fill: BezierCurveFillIcon,
      light: BezierCurveLightIcon,
      regular: BezierCurveRegularIcon,
      thin: BezierCurveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
