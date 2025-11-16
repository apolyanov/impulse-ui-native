import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PopcornBold } from "../bold";
import { PopcornDuotone } from "../duotone";
import { PopcornFill } from "../fill";
import { PopcornLight } from "../light";
import { PopcornRegular } from "../regular";
import { PopcornThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Popcorn = memo(function Popcorn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PopcornBold,
      duotone: PopcornDuotone,
      fill: PopcornFill,
      light: PopcornLight,
      regular: PopcornRegular,
      thin: PopcornThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
