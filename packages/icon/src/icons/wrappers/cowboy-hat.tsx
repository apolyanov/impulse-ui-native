import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CowboyHatBold } from "../bold";
import { CowboyHatDuotone } from "../duotone";
import { CowboyHatFill } from "../fill";
import { CowboyHatLight } from "../light";
import { CowboyHatRegular } from "../regular";
import { CowboyHatThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CowboyHat = memo(function CowboyHat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CowboyHatBold,
      duotone: CowboyHatDuotone,
      fill: CowboyHatFill,
      light: CowboyHatLight,
      regular: CowboyHatRegular,
      thin: CowboyHatThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
