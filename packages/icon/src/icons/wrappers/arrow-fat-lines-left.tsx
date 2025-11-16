import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLinesLeftBold } from "../bold";
import { ArrowFatLinesLeftDuotone } from "../duotone";
import { ArrowFatLinesLeftFill } from "../fill";
import { ArrowFatLinesLeftLight } from "../light";
import { ArrowFatLinesLeftRegular } from "../regular";
import { ArrowFatLinesLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLinesLeft = memo(function ArrowFatLinesLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLinesLeftBold,
      duotone: ArrowFatLinesLeftDuotone,
      fill: ArrowFatLinesLeftFill,
      light: ArrowFatLinesLeftLight,
      regular: ArrowFatLinesLeftRegular,
      thin: ArrowFatLinesLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
