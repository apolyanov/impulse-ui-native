import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StarBoldIcon } from "../bold";
import { StarDuotoneIcon } from "../duotone";
import { StarFillIcon } from "../fill";
import { StarLightIcon } from "../light";
import { StarRegularIcon } from "../regular";
import { StarThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StarIcon = memo(function Star(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StarBoldIcon,
      duotone: StarDuotoneIcon,
      fill: StarFillIcon,
      light: StarLightIcon,
      regular: StarRegularIcon,
      thin: StarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
