import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StarOfDavidBoldIcon } from "../bold/star-of-david-bold.icon";
import { StarOfDavidDuotoneIcon } from "../duotone/star-of-david-duotone.icon";
import { StarOfDavidFillIcon } from "../fill/star-of-david-fill.icon";
import { StarOfDavidLightIcon } from "../light/star-of-david-light.icon";
import { StarOfDavidRegularIcon } from "../regular/star-of-david-regular.icon";
import { StarOfDavidThinIcon } from "../thin/star-of-david-thin.icon";

export const StarOfDavidIcon = memo(function StarOfDavid(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StarOfDavidBoldIcon,
      duotone: StarOfDavidDuotoneIcon,
      fill: StarOfDavidFillIcon,
      light: StarOfDavidLightIcon,
      regular: StarOfDavidRegularIcon,
      thin: StarOfDavidThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
