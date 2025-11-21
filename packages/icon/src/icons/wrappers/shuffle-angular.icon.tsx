import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShuffleAngularBoldIcon } from "../bold";
import { ShuffleAngularDuotoneIcon } from "../duotone";
import { ShuffleAngularFillIcon } from "../fill";
import { ShuffleAngularLightIcon } from "../light";
import { ShuffleAngularRegularIcon } from "../regular";
import { ShuffleAngularThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShuffleAngularIcon = memo(function ShuffleAngular(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShuffleAngularBoldIcon,
      duotone: ShuffleAngularDuotoneIcon,
      fill: ShuffleAngularFillIcon,
      light: ShuffleAngularLightIcon,
      regular: ShuffleAngularRegularIcon,
      thin: ShuffleAngularThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
