import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlashlightBoldIcon } from "../bold";
import { FlashlightDuotoneIcon } from "../duotone";
import { FlashlightFillIcon } from "../fill";
import { FlashlightLightIcon } from "../light";
import { FlashlightRegularIcon } from "../regular";
import { FlashlightThinIcon } from "../thin";

export const FlashlightIcon = memo(function Flashlight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlashlightBoldIcon,
      duotone: FlashlightDuotoneIcon,
      fill: FlashlightFillIcon,
      light: FlashlightLightIcon,
      regular: FlashlightRegularIcon,
      thin: FlashlightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
