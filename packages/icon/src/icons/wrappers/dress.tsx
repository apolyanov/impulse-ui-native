import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DressBold } from "../bold";
import { DressDuotone } from "../duotone";
import { DressFill } from "../fill";
import { DressLight } from "../light";
import { DressRegular } from "../regular";
import { DressThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Dress = memo(function Dress(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DressBold,
      duotone: DressDuotone,
      fill: DressFill,
      light: DressLight,
      regular: DressRegular,
      thin: DressThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
