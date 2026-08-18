import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { OnigiriBoldIcon } from "../bold/onigiri-bold.icon";
import { OnigiriDuotoneIcon } from "../duotone/onigiri-duotone.icon";
import { OnigiriFillIcon } from "../fill/onigiri-fill.icon";
import { OnigiriLightIcon } from "../light/onigiri-light.icon";
import { OnigiriRegularIcon } from "../regular/onigiri-regular.icon";
import { OnigiriThinIcon } from "../thin/onigiri-thin.icon";

export const OnigiriIcon = memo(function Onigiri(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OnigiriBoldIcon,
      duotone: OnigiriDuotoneIcon,
      fill: OnigiriFillIcon,
      light: OnigiriLightIcon,
      regular: OnigiriRegularIcon,
      thin: OnigiriThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
