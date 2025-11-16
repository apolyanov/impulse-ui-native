import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CheckFatBold } from "../bold";
import { CheckFatDuotone } from "../duotone";
import { CheckFatFill } from "../fill";
import { CheckFatLight } from "../light";
import { CheckFatRegular } from "../regular";
import { CheckFatThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CheckFat = memo(function CheckFat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheckFatBold,
      duotone: CheckFatDuotone,
      fill: CheckFatFill,
      light: CheckFatLight,
      regular: CheckFatRegular,
      thin: CheckFatThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
