import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShirtFoldedBoldIcon } from "../bold/shirt-folded-bold.icon";
import { ShirtFoldedDuotoneIcon } from "../duotone/shirt-folded-duotone.icon";
import { ShirtFoldedFillIcon } from "../fill/shirt-folded-fill.icon";
import { ShirtFoldedLightIcon } from "../light/shirt-folded-light.icon";
import { ShirtFoldedRegularIcon } from "../regular/shirt-folded-regular.icon";
import { ShirtFoldedThinIcon } from "../thin/shirt-folded-thin.icon";

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
