import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ToggleRightBoldIcon } from "../bold/toggle-right-bold.icon";
import { ToggleRightDuotoneIcon } from "../duotone/toggle-right-duotone.icon";
import { ToggleRightFillIcon } from "../fill/toggle-right-fill.icon";
import { ToggleRightLightIcon } from "../light/toggle-right-light.icon";
import { ToggleRightRegularIcon } from "../regular/toggle-right-regular.icon";
import { ToggleRightThinIcon } from "../thin/toggle-right-thin.icon";

export const ToggleRightIcon = memo(function ToggleRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToggleRightBoldIcon,
      duotone: ToggleRightDuotoneIcon,
      fill: ToggleRightFillIcon,
      light: ToggleRightLightIcon,
      regular: ToggleRightRegularIcon,
      thin: ToggleRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
