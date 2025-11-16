import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShieldCheckBold } from "../bold";
import { ShieldCheckDuotone } from "../duotone";
import { ShieldCheckFill } from "../fill";
import { ShieldCheckLight } from "../light";
import { ShieldCheckRegular } from "../regular";
import { ShieldCheckThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShieldCheck = memo(function ShieldCheck(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldCheckBold,
      duotone: ShieldCheckDuotone,
      fill: ShieldCheckFill,
      light: ShieldCheckLight,
      regular: ShieldCheckRegular,
      thin: ShieldCheckThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
