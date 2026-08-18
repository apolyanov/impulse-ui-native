import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BellSimpleRingingBoldIcon } from "../bold/bell-simple-ringing-bold.icon";
import { BellSimpleRingingDuotoneIcon } from "../duotone/bell-simple-ringing-duotone.icon";
import { BellSimpleRingingFillIcon } from "../fill/bell-simple-ringing-fill.icon";
import { BellSimpleRingingLightIcon } from "../light/bell-simple-ringing-light.icon";
import { BellSimpleRingingRegularIcon } from "../regular/bell-simple-ringing-regular.icon";
import { BellSimpleRingingThinIcon } from "../thin/bell-simple-ringing-thin.icon";

export const BellSimpleRingingIcon = memo(function BellSimpleRinging(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellSimpleRingingBoldIcon,
      duotone: BellSimpleRingingDuotoneIcon,
      fill: BellSimpleRingingFillIcon,
      light: BellSimpleRingingLightIcon,
      regular: BellSimpleRingingRegularIcon,
      thin: BellSimpleRingingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
