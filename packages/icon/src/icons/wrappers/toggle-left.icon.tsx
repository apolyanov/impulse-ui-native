import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ToggleLeftBoldIcon } from "../bold/toggle-left-bold.icon";
import { ToggleLeftDuotoneIcon } from "../duotone/toggle-left-duotone.icon";
import { ToggleLeftFillIcon } from "../fill/toggle-left-fill.icon";
import { ToggleLeftLightIcon } from "../light/toggle-left-light.icon";
import { ToggleLeftRegularIcon } from "../regular/toggle-left-regular.icon";
import { ToggleLeftThinIcon } from "../thin/toggle-left-thin.icon";

export const ToggleLeftIcon = memo(function ToggleLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToggleLeftBoldIcon,
      duotone: ToggleLeftDuotoneIcon,
      fill: ToggleLeftFillIcon,
      light: ToggleLeftLightIcon,
      regular: ToggleLeftRegularIcon,
      thin: ToggleLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
