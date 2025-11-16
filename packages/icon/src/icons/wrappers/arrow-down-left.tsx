import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowDownLeftBold } from "../bold";
import { ArrowDownLeftDuotone } from "../duotone";
import { ArrowDownLeftFill } from "../fill";
import { ArrowDownLeftLight } from "../light";
import { ArrowDownLeftRegular } from "../regular";
import { ArrowDownLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowDownLeft = memo(function ArrowDownLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowDownLeftBold,
      duotone: ArrowDownLeftDuotone,
      fill: ArrowDownLeftFill,
      light: ArrowDownLeftLight,
      regular: ArrowDownLeftRegular,
      thin: ArrowDownLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
