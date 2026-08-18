import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StarBoldIcon } from "../bold/star-bold.icon";
import { StarDuotoneIcon } from "../duotone/star-duotone.icon";
import { StarFillIcon } from "../fill/star-fill.icon";
import { StarLightIcon } from "../light/star-light.icon";
import { StarRegularIcon } from "../regular/star-regular.icon";
import { StarThinIcon } from "../thin/star-thin.icon";

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
