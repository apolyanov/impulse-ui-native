import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLeftBoldIcon } from "../bold";
import { ArrowFatLeftDuotoneIcon } from "../duotone";
import { ArrowFatLeftFillIcon } from "../fill";
import { ArrowFatLeftLightIcon } from "../light";
import { ArrowFatLeftRegularIcon } from "../regular";
import { ArrowFatLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLeftIcon = memo(function ArrowFatLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLeftBoldIcon,
      duotone: ArrowFatLeftDuotoneIcon,
      fill: ArrowFatLeftFillIcon,
      light: ArrowFatLeftLightIcon,
      regular: ArrowFatLeftRegularIcon,
      thin: ArrowFatLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
