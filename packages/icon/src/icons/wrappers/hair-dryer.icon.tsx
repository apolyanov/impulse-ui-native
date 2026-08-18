import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HairDryerBoldIcon } from "../bold/hair-dryer-bold.icon";
import { HairDryerDuotoneIcon } from "../duotone/hair-dryer-duotone.icon";
import { HairDryerFillIcon } from "../fill/hair-dryer-fill.icon";
import { HairDryerLightIcon } from "../light/hair-dryer-light.icon";
import { HairDryerRegularIcon } from "../regular/hair-dryer-regular.icon";
import { HairDryerThinIcon } from "../thin/hair-dryer-thin.icon";

export const HairDryerIcon = memo(function HairDryer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HairDryerBoldIcon,
      duotone: HairDryerDuotoneIcon,
      fill: HairDryerFillIcon,
      light: HairDryerLightIcon,
      regular: HairDryerRegularIcon,
      thin: HairDryerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
