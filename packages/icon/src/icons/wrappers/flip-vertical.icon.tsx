import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlipVerticalBoldIcon } from "../bold/flip-vertical-bold.icon";
import { FlipVerticalDuotoneIcon } from "../duotone/flip-vertical-duotone.icon";
import { FlipVerticalFillIcon } from "../fill/flip-vertical-fill.icon";
import { FlipVerticalLightIcon } from "../light/flip-vertical-light.icon";
import { FlipVerticalRegularIcon } from "../regular/flip-vertical-regular.icon";
import { FlipVerticalThinIcon } from "../thin/flip-vertical-thin.icon";

export const FlipVerticalIcon = memo(function FlipVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlipVerticalBoldIcon,
      duotone: FlipVerticalDuotoneIcon,
      fill: FlipVerticalFillIcon,
      light: FlipVerticalLightIcon,
      regular: FlipVerticalRegularIcon,
      thin: FlipVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
