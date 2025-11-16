import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BezierCurveBold } from "../bold";
import { BezierCurveDuotone } from "../duotone";
import { BezierCurveFill } from "../fill";
import { BezierCurveLight } from "../light";
import { BezierCurveRegular } from "../regular";
import { BezierCurveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BezierCurve = memo(function BezierCurve(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BezierCurveBold,
      duotone: BezierCurveDuotone,
      fill: BezierCurveFill,
      light: BezierCurveLight,
      regular: BezierCurveRegular,
      thin: BezierCurveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
