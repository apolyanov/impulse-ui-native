import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BezierCurveBoldIcon } from "../bold";
import { BezierCurveDuotoneIcon } from "../duotone";
import { BezierCurveFillIcon } from "../fill";
import { BezierCurveLightIcon } from "../light";
import { BezierCurveRegularIcon } from "../regular";
import { BezierCurveThinIcon } from "../thin";

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
