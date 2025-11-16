import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DropHalfBold } from "../bold";
import { DropHalfDuotone } from "../duotone";
import { DropHalfFill } from "../fill";
import { DropHalfLight } from "../light";
import { DropHalfRegular } from "../regular";
import { DropHalfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DropHalf = memo(function DropHalf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropHalfBold,
      duotone: DropHalfDuotone,
      fill: DropHalfFill,
      light: DropHalfLight,
      regular: DropHalfRegular,
      thin: DropHalfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
