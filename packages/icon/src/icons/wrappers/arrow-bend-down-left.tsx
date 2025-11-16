import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowBendDownLeftBold } from "../bold";
import { ArrowBendDownLeftDuotone } from "../duotone";
import { ArrowBendDownLeftFill } from "../fill";
import { ArrowBendDownLeftLight } from "../light";
import { ArrowBendDownLeftRegular } from "../regular";
import { ArrowBendDownLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowBendDownLeft = memo(function ArrowBendDownLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendDownLeftBold,
      duotone: ArrowBendDownLeftDuotone,
      fill: ArrowBendDownLeftFill,
      light: ArrowBendDownLeftLight,
      regular: ArrowBendDownLeftRegular,
      thin: ArrowBendDownLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
