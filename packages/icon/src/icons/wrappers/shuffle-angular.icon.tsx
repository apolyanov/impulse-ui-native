import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShuffleAngularBoldIcon } from "../bold/shuffle-angular-bold.icon";
import { ShuffleAngularDuotoneIcon } from "../duotone/shuffle-angular-duotone.icon";
import { ShuffleAngularFillIcon } from "../fill/shuffle-angular-fill.icon";
import { ShuffleAngularLightIcon } from "../light/shuffle-angular-light.icon";
import { ShuffleAngularRegularIcon } from "../regular/shuffle-angular-regular.icon";
import { ShuffleAngularThinIcon } from "../thin/shuffle-angular-thin.icon";

export const ShuffleAngularIcon = memo(function ShuffleAngular(
  props: IconWrapperProps,
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
