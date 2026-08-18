import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HardHatBoldIcon } from "../bold/hard-hat-bold.icon";
import { HardHatDuotoneIcon } from "../duotone/hard-hat-duotone.icon";
import { HardHatFillIcon } from "../fill/hard-hat-fill.icon";
import { HardHatLightIcon } from "../light/hard-hat-light.icon";
import { HardHatRegularIcon } from "../regular/hard-hat-regular.icon";
import { HardHatThinIcon } from "../thin/hard-hat-thin.icon";

export const HardHatIcon = memo(function HardHat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HardHatBoldIcon,
      duotone: HardHatDuotoneIcon,
      fill: HardHatFillIcon,
      light: HardHatLightIcon,
      regular: HardHatRegularIcon,
      thin: HardHatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
