import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CheckFatBoldIcon } from "../bold/check-fat-bold.icon";
import { CheckFatDuotoneIcon } from "../duotone/check-fat-duotone.icon";
import { CheckFatFillIcon } from "../fill/check-fat-fill.icon";
import { CheckFatLightIcon } from "../light/check-fat-light.icon";
import { CheckFatRegularIcon } from "../regular/check-fat-regular.icon";
import { CheckFatThinIcon } from "../thin/check-fat-thin.icon";

export const CheckFatIcon = memo(function CheckFat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheckFatBoldIcon,
      duotone: CheckFatDuotoneIcon,
      fill: CheckFatFillIcon,
      light: CheckFatLightIcon,
      regular: CheckFatRegularIcon,
      thin: CheckFatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
