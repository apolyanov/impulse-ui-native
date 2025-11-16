import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BirdBold } from "../bold";
import { BirdDuotone } from "../duotone";
import { BirdFill } from "../fill";
import { BirdLight } from "../light";
import { BirdRegular } from "../regular";
import { BirdThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bird = memo(function Bird(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BirdBold,
      duotone: BirdDuotone,
      fill: BirdFill,
      light: BirdLight,
      regular: BirdRegular,
      thin: BirdThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
