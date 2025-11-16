import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhonePlusBold } from "../bold";
import { PhonePlusDuotone } from "../duotone";
import { PhonePlusFill } from "../fill";
import { PhonePlusLight } from "../light";
import { PhonePlusRegular } from "../regular";
import { PhonePlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PhonePlus = memo(function PhonePlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhonePlusBold,
      duotone: PhonePlusDuotone,
      fill: PhonePlusFill,
      light: PhonePlusLight,
      regular: PhonePlusRegular,
      thin: PhonePlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
