import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DropHalfBottomBold } from "../bold";
import { DropHalfBottomDuotone } from "../duotone";
import { DropHalfBottomFill } from "../fill";
import { DropHalfBottomLight } from "../light";
import { DropHalfBottomRegular } from "../regular";
import { DropHalfBottomThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DropHalfBottom = memo(function DropHalfBottom(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropHalfBottomBold,
      duotone: DropHalfBottomDuotone,
      fill: DropHalfBottomFill,
      light: DropHalfBottomLight,
      regular: DropHalfBottomRegular,
      thin: DropHalfBottomThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
