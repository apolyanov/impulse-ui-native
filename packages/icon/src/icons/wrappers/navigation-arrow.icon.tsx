import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NavigationArrowBoldIcon } from "../bold/navigation-arrow-bold.icon";
import { NavigationArrowDuotoneIcon } from "../duotone/navigation-arrow-duotone.icon";
import { NavigationArrowFillIcon } from "../fill/navigation-arrow-fill.icon";
import { NavigationArrowLightIcon } from "../light/navigation-arrow-light.icon";
import { NavigationArrowRegularIcon } from "../regular/navigation-arrow-regular.icon";
import { NavigationArrowThinIcon } from "../thin/navigation-arrow-thin.icon";

export const NavigationArrowIcon = memo(function NavigationArrow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NavigationArrowBoldIcon,
      duotone: NavigationArrowDuotoneIcon,
      fill: NavigationArrowFillIcon,
      light: NavigationArrowLightIcon,
      regular: NavigationArrowRegularIcon,
      thin: NavigationArrowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
