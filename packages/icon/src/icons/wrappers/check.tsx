import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CheckBold } from "../bold";
import { CheckDuotone } from "../duotone";
import { CheckFill } from "../fill";
import { CheckLight } from "../light";
import { CheckRegular } from "../regular";
import { CheckThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Check = memo(function Check(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheckBold,
      duotone: CheckDuotone,
      fill: CheckFill,
      light: CheckLight,
      regular: CheckRegular,
      thin: CheckThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
