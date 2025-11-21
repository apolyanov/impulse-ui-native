import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLinesLeftBoldIcon } from "../bold";
import { ArrowFatLinesLeftDuotoneIcon } from "../duotone";
import { ArrowFatLinesLeftFillIcon } from "../fill";
import { ArrowFatLinesLeftLightIcon } from "../light";
import { ArrowFatLinesLeftRegularIcon } from "../regular";
import { ArrowFatLinesLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLinesLeftIcon = memo(function ArrowFatLinesLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLinesLeftBoldIcon,
      duotone: ArrowFatLinesLeftDuotoneIcon,
      fill: ArrowFatLinesLeftFillIcon,
      light: ArrowFatLinesLeftLightIcon,
      regular: ArrowFatLinesLeftRegularIcon,
      thin: ArrowFatLinesLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
