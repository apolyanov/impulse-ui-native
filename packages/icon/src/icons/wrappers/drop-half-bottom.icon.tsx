import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DropHalfBottomBoldIcon } from "../bold";
import { DropHalfBottomDuotoneIcon } from "../duotone";
import { DropHalfBottomFillIcon } from "../fill";
import { DropHalfBottomLightIcon } from "../light";
import { DropHalfBottomRegularIcon } from "../regular";
import { DropHalfBottomThinIcon } from "../thin";

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
