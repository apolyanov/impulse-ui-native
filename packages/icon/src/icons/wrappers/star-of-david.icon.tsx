import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StarOfDavidBoldIcon } from "../bold";
import { StarOfDavidDuotoneIcon } from "../duotone";
import { StarOfDavidFillIcon } from "../fill";
import { StarOfDavidLightIcon } from "../light";
import { StarOfDavidRegularIcon } from "../regular";
import { StarOfDavidThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StarOfDavidIcon = memo(function StarOfDavid(
  props: IconWrapperProps
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
