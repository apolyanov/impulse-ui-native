import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BoatBoldIcon } from "../bold/boat-bold.icon";
import { BoatDuotoneIcon } from "../duotone/boat-duotone.icon";
import { BoatFillIcon } from "../fill/boat-fill.icon";
import { BoatLightIcon } from "../light/boat-light.icon";
import { BoatRegularIcon } from "../regular/boat-regular.icon";
import { BoatThinIcon } from "../thin/boat-thin.icon";

export const BoatIcon = memo(function Boat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoatBoldIcon,
      duotone: BoatDuotoneIcon,
      fill: BoatFillIcon,
      light: BoatLightIcon,
      regular: BoatRegularIcon,
      thin: BoatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
