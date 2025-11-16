import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BellSimpleRingingBold } from "../bold";
import { BellSimpleRingingDuotone } from "../duotone";
import { BellSimpleRingingFill } from "../fill";
import { BellSimpleRingingLight } from "../light";
import { BellSimpleRingingRegular } from "../regular";
import { BellSimpleRingingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BellSimpleRinging = memo(function BellSimpleRinging(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellSimpleRingingBold,
      duotone: BellSimpleRingingDuotone,
      fill: BellSimpleRingingFill,
      light: BellSimpleRingingLight,
      regular: BellSimpleRingingRegular,
      thin: BellSimpleRingingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
