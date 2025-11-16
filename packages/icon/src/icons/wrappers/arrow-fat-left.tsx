import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLeftBold } from "../bold";
import { ArrowFatLeftDuotone } from "../duotone";
import { ArrowFatLeftFill } from "../fill";
import { ArrowFatLeftLight } from "../light";
import { ArrowFatLeftRegular } from "../regular";
import { ArrowFatLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLeft = memo(function ArrowFatLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLeftBold,
      duotone: ArrowFatLeftDuotone,
      fill: ArrowFatLeftFill,
      light: ArrowFatLeftLight,
      regular: ArrowFatLeftRegular,
      thin: ArrowFatLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
