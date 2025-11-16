import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LessThanBold } from "../bold";
import { LessThanDuotone } from "../duotone";
import { LessThanFill } from "../fill";
import { LessThanLight } from "../light";
import { LessThanRegular } from "../regular";
import { LessThanThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LessThan = memo(function LessThan(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LessThanBold,
      duotone: LessThanDuotone,
      fill: LessThanFill,
      light: LessThanLight,
      regular: LessThanRegular,
      thin: LessThanThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
