import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CowboyHatBoldIcon } from "../bold";
import { CowboyHatDuotoneIcon } from "../duotone";
import { CowboyHatFillIcon } from "../fill";
import { CowboyHatLightIcon } from "../light";
import { CowboyHatRegularIcon } from "../regular";
import { CowboyHatThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
