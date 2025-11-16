import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLineLeftBold } from "../bold";
import { ArrowFatLineLeftDuotone } from "../duotone";
import { ArrowFatLineLeftFill } from "../fill";
import { ArrowFatLineLeftLight } from "../light";
import { ArrowFatLineLeftRegular } from "../regular";
import { ArrowFatLineLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLineLeft = memo(function ArrowFatLineLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLineLeftBold,
      duotone: ArrowFatLineLeftDuotone,
      fill: ArrowFatLineLeftFill,
      light: ArrowFatLineLeftLight,
      regular: ArrowFatLineLeftRegular,
      thin: ArrowFatLineLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
