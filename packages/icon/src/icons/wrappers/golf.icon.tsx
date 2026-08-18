import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GolfBoldIcon } from "../bold/golf-bold.icon";
import { GolfDuotoneIcon } from "../duotone/golf-duotone.icon";
import { GolfFillIcon } from "../fill/golf-fill.icon";
import { GolfLightIcon } from "../light/golf-light.icon";
import { GolfRegularIcon } from "../regular/golf-regular.icon";
import { GolfThinIcon } from "../thin/golf-thin.icon";

export const GolfIcon = memo(function Golf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GolfBoldIcon,
      duotone: GolfDuotoneIcon,
      fill: GolfFillIcon,
      light: GolfLightIcon,
      regular: GolfRegularIcon,
      thin: GolfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
