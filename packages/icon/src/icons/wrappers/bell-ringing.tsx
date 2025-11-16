import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BellRingingBold } from "../bold";
import { BellRingingDuotone } from "../duotone";
import { BellRingingFill } from "../fill";
import { BellRingingLight } from "../light";
import { BellRingingRegular } from "../regular";
import { BellRingingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BellRinging = memo(function BellRinging(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellRingingBold,
      duotone: BellRingingDuotone,
      fill: BellRingingFill,
      light: BellRingingLight,
      regular: BellRingingRegular,
      thin: BellRingingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
