import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowUDownLeftBoldIcon } from "../bold";
import { ArrowUDownLeftDuotoneIcon } from "../duotone";
import { ArrowUDownLeftFillIcon } from "../fill";
import { ArrowUDownLeftLightIcon } from "../light";
import { ArrowUDownLeftRegularIcon } from "../regular";
import { ArrowUDownLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowUDownLeftIcon = memo(function ArrowUDownLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUDownLeftBoldIcon,
      duotone: ArrowUDownLeftDuotoneIcon,
      fill: ArrowUDownLeftFillIcon,
      light: ArrowUDownLeftLightIcon,
      regular: ArrowUDownLeftRegularIcon,
      thin: ArrowUDownLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
