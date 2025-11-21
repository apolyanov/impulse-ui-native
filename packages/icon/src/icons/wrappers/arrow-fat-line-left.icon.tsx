import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLineLeftBoldIcon } from "../bold";
import { ArrowFatLineLeftDuotoneIcon } from "../duotone";
import { ArrowFatLineLeftFillIcon } from "../fill";
import { ArrowFatLineLeftLightIcon } from "../light";
import { ArrowFatLineLeftRegularIcon } from "../regular";
import { ArrowFatLineLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLineLeftIcon = memo(function ArrowFatLineLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLineLeftBoldIcon,
      duotone: ArrowFatLineLeftDuotoneIcon,
      fill: ArrowFatLineLeftFillIcon,
      light: ArrowFatLineLeftLightIcon,
      regular: ArrowFatLineLeftRegularIcon,
      thin: ArrowFatLineLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
