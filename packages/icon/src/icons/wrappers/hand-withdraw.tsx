import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandWithdrawBold } from "../bold";
import { HandWithdrawDuotone } from "../duotone";
import { HandWithdrawFill } from "../fill";
import { HandWithdrawLight } from "../light";
import { HandWithdrawRegular } from "../regular";
import { HandWithdrawThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandWithdraw = memo(function HandWithdraw(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandWithdrawBold,
      duotone: HandWithdrawDuotone,
      fill: HandWithdrawFill,
      light: HandWithdrawLight,
      regular: HandWithdrawRegular,
      thin: HandWithdrawThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
