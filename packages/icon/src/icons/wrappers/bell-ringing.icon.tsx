import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BellRingingBoldIcon } from "../bold";
import { BellRingingDuotoneIcon } from "../duotone";
import { BellRingingFillIcon } from "../fill";
import { BellRingingLightIcon } from "../light";
import { BellRingingRegularIcon } from "../regular";
import { BellRingingThinIcon } from "../thin";

export const BellRingingIcon = memo(function BellRinging(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellRingingBoldIcon,
      duotone: BellRingingDuotoneIcon,
      fill: BellRingingFillIcon,
      light: BellRingingLightIcon,
      regular: BellRingingRegularIcon,
      thin: BellRingingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
