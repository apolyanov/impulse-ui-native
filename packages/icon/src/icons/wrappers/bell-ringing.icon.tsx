import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BellRingingBoldIcon } from "../bold/bell-ringing-bold.icon";
import { BellRingingDuotoneIcon } from "../duotone/bell-ringing-duotone.icon";
import { BellRingingFillIcon } from "../fill/bell-ringing-fill.icon";
import { BellRingingLightIcon } from "../light/bell-ringing-light.icon";
import { BellRingingRegularIcon } from "../regular/bell-ringing-regular.icon";
import { BellRingingThinIcon } from "../thin/bell-ringing-thin.icon";

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
