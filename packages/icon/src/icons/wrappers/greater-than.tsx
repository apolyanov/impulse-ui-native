import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GreaterThanBold } from "../bold";
import { GreaterThanDuotone } from "../duotone";
import { GreaterThanFill } from "../fill";
import { GreaterThanLight } from "../light";
import { GreaterThanRegular } from "../regular";
import { GreaterThanThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GreaterThan = memo(function GreaterThan(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GreaterThanBold,
      duotone: GreaterThanDuotone,
      fill: GreaterThanFill,
      light: GreaterThanLight,
      regular: GreaterThanRegular,
      thin: GreaterThanThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
