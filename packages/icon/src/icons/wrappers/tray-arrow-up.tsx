import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrayArrowUpBold } from "../bold";
import { TrayArrowUpDuotone } from "../duotone";
import { TrayArrowUpFill } from "../fill";
import { TrayArrowUpLight } from "../light";
import { TrayArrowUpRegular } from "../regular";
import { TrayArrowUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrayArrowUp = memo(function TrayArrowUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrayArrowUpBold,
      duotone: TrayArrowUpDuotone,
      fill: TrayArrowUpFill,
      light: TrayArrowUpLight,
      regular: TrayArrowUpRegular,
      thin: TrayArrowUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
