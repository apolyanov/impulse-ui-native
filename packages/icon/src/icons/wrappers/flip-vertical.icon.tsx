import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlipVerticalBoldIcon } from "../bold";
import { FlipVerticalDuotoneIcon } from "../duotone";
import { FlipVerticalFillIcon } from "../fill";
import { FlipVerticalLightIcon } from "../light";
import { FlipVerticalRegularIcon } from "../regular";
import { FlipVerticalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlipVerticalIcon = memo(function FlipVertical(
  props: IconWrapperProps
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
