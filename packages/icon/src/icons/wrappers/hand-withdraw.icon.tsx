import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandWithdrawBoldIcon } from "../bold/hand-withdraw-bold.icon";
import { HandWithdrawDuotoneIcon } from "../duotone/hand-withdraw-duotone.icon";
import { HandWithdrawFillIcon } from "../fill/hand-withdraw-fill.icon";
import { HandWithdrawLightIcon } from "../light/hand-withdraw-light.icon";
import { HandWithdrawRegularIcon } from "../regular/hand-withdraw-regular.icon";
import { HandWithdrawThinIcon } from "../thin/hand-withdraw-thin.icon";

export const HandWithdrawIcon = memo(function HandWithdraw(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandWithdrawBoldIcon,
      duotone: HandWithdrawDuotoneIcon,
      fill: HandWithdrawFillIcon,
      light: HandWithdrawLightIcon,
      regular: HandWithdrawRegularIcon,
      thin: HandWithdrawThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
