import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DropHalfBottomBoldIcon } from "../bold/drop-half-bottom-bold.icon";
import { DropHalfBottomDuotoneIcon } from "../duotone/drop-half-bottom-duotone.icon";
import { DropHalfBottomFillIcon } from "../fill/drop-half-bottom-fill.icon";
import { DropHalfBottomLightIcon } from "../light/drop-half-bottom-light.icon";
import { DropHalfBottomRegularIcon } from "../regular/drop-half-bottom-regular.icon";
import { DropHalfBottomThinIcon } from "../thin/drop-half-bottom-thin.icon";

export const DropHalfBottomIcon = memo(function DropHalfBottom(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropHalfBottomBoldIcon,
      duotone: DropHalfBottomDuotoneIcon,
      fill: DropHalfBottomFillIcon,
      light: DropHalfBottomLightIcon,
      regular: DropHalfBottomRegularIcon,
      thin: DropHalfBottomThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
