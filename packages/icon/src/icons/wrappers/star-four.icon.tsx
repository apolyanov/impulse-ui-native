import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StarFourBoldIcon } from "../bold/star-four-bold.icon";
import { StarFourDuotoneIcon } from "../duotone/star-four-duotone.icon";
import { StarFourFillIcon } from "../fill/star-four-fill.icon";
import { StarFourLightIcon } from "../light/star-four-light.icon";
import { StarFourRegularIcon } from "../regular/star-four-regular.icon";
import { StarFourThinIcon } from "../thin/star-four-thin.icon";

export const StarFourIcon = memo(function StarFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StarFourBoldIcon,
      duotone: StarFourDuotoneIcon,
      fill: StarFourFillIcon,
      light: StarFourLightIcon,
      regular: StarFourRegularIcon,
      thin: StarFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
