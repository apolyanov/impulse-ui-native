import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShirtFoldedBoldIcon } from "../bold";
import { ShirtFoldedDuotoneIcon } from "../duotone";
import { ShirtFoldedFillIcon } from "../fill";
import { ShirtFoldedLightIcon } from "../light";
import { ShirtFoldedRegularIcon } from "../regular";
import { ShirtFoldedThinIcon } from "../thin";

export const ShirtFoldedIcon = memo(function ShirtFolded(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShirtFoldedBoldIcon,
      duotone: ShirtFoldedDuotoneIcon,
      fill: ShirtFoldedFillIcon,
      light: ShirtFoldedLightIcon,
      regular: ShirtFoldedRegularIcon,
      thin: ShirtFoldedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
