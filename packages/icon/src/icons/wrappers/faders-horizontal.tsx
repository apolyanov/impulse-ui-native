import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FadersHorizontalBold } from "../bold";
import { FadersHorizontalDuotone } from "../duotone";
import { FadersHorizontalFill } from "../fill";
import { FadersHorizontalLight } from "../light";
import { FadersHorizontalRegular } from "../regular";
import { FadersHorizontalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FadersHorizontal = memo(function FadersHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FadersHorizontalBold,
      duotone: FadersHorizontalDuotone,
      fill: FadersHorizontalFill,
      light: FadersHorizontalLight,
      regular: FadersHorizontalRegular,
      thin: FadersHorizontalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
