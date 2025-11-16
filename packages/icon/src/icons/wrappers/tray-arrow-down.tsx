import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrayArrowDownBold } from "../bold";
import { TrayArrowDownDuotone } from "../duotone";
import { TrayArrowDownFill } from "../fill";
import { TrayArrowDownLight } from "../light";
import { TrayArrowDownRegular } from "../regular";
import { TrayArrowDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrayArrowDown = memo(function TrayArrowDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrayArrowDownBold,
      duotone: TrayArrowDownDuotone,
      fill: TrayArrowDownFill,
      light: TrayArrowDownLight,
      regular: TrayArrowDownRegular,
      thin: TrayArrowDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
