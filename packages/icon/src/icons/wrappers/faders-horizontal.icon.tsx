import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FadersHorizontalBoldIcon } from "../bold/faders-horizontal-bold.icon";
import { FadersHorizontalDuotoneIcon } from "../duotone/faders-horizontal-duotone.icon";
import { FadersHorizontalFillIcon } from "../fill/faders-horizontal-fill.icon";
import { FadersHorizontalLightIcon } from "../light/faders-horizontal-light.icon";
import { FadersHorizontalRegularIcon } from "../regular/faders-horizontal-regular.icon";
import { FadersHorizontalThinIcon } from "../thin/faders-horizontal-thin.icon";

export const FadersHorizontalIcon = memo(function FadersHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FadersHorizontalBoldIcon,
      duotone: FadersHorizontalDuotoneIcon,
      fill: FadersHorizontalFillIcon,
      light: FadersHorizontalLightIcon,
      regular: FadersHorizontalRegularIcon,
      thin: FadersHorizontalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
