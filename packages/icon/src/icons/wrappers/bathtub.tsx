import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BathtubBold } from "../bold";
import { BathtubDuotone } from "../duotone";
import { BathtubFill } from "../fill";
import { BathtubLight } from "../light";
import { BathtubRegular } from "../regular";
import { BathtubThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bathtub = memo(function Bathtub(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BathtubBold,
      duotone: BathtubDuotone,
      fill: BathtubFill,
      light: BathtubLight,
      regular: BathtubRegular,
      thin: BathtubThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
