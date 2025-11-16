import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PenNibBold } from "../bold";
import { PenNibDuotone } from "../duotone";
import { PenNibFill } from "../fill";
import { PenNibLight } from "../light";
import { PenNibRegular } from "../regular";
import { PenNibThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PenNib = memo(function PenNib(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PenNibBold,
      duotone: PenNibDuotone,
      fill: PenNibFill,
      light: PenNibLight,
      regular: PenNibRegular,
      thin: PenNibThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
