import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlashlightBoldIcon } from "../bold/flashlight-bold.icon";
import { FlashlightDuotoneIcon } from "../duotone/flashlight-duotone.icon";
import { FlashlightFillIcon } from "../fill/flashlight-fill.icon";
import { FlashlightLightIcon } from "../light/flashlight-light.icon";
import { FlashlightRegularIcon } from "../regular/flashlight-regular.icon";
import { FlashlightThinIcon } from "../thin/flashlight-thin.icon";

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
