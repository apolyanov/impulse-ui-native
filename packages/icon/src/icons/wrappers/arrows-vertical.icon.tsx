import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsVerticalBoldIcon } from "../bold/arrows-vertical-bold.icon";
import { ArrowsVerticalDuotoneIcon } from "../duotone/arrows-vertical-duotone.icon";
import { ArrowsVerticalFillIcon } from "../fill/arrows-vertical-fill.icon";
import { ArrowsVerticalLightIcon } from "../light/arrows-vertical-light.icon";
import { ArrowsVerticalRegularIcon } from "../regular/arrows-vertical-regular.icon";
import { ArrowsVerticalThinIcon } from "../thin/arrows-vertical-thin.icon";

export const ArrowsVerticalIcon = memo(function ArrowsVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsVerticalBoldIcon,
      duotone: ArrowsVerticalDuotoneIcon,
      fill: ArrowsVerticalFillIcon,
      light: ArrowsVerticalLightIcon,
      regular: ArrowsVerticalRegularIcon,
      thin: ArrowsVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
