import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CowboyHatBoldIcon } from "../bold/cowboy-hat-bold.icon";
import { CowboyHatDuotoneIcon } from "../duotone/cowboy-hat-duotone.icon";
import { CowboyHatFillIcon } from "../fill/cowboy-hat-fill.icon";
import { CowboyHatLightIcon } from "../light/cowboy-hat-light.icon";
import { CowboyHatRegularIcon } from "../regular/cowboy-hat-regular.icon";
import { CowboyHatThinIcon } from "../thin/cowboy-hat-thin.icon";

export const CowboyHatIcon = memo(function CowboyHat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CowboyHatBoldIcon,
      duotone: CowboyHatDuotoneIcon,
      fill: CowboyHatFillIcon,
      light: CowboyHatLightIcon,
      regular: CowboyHatRegularIcon,
      thin: CowboyHatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
