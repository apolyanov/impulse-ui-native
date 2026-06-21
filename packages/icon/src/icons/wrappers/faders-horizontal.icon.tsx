import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FadersHorizontalBoldIcon } from "../bold";
import { FadersHorizontalDuotoneIcon } from "../duotone";
import { FadersHorizontalFillIcon } from "../fill";
import { FadersHorizontalLightIcon } from "../light";
import { FadersHorizontalRegularIcon } from "../regular";
import { FadersHorizontalThinIcon } from "../thin";

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
