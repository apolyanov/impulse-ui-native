import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CheckBoldIcon } from "../bold/check-bold.icon";
import { CheckDuotoneIcon } from "../duotone/check-duotone.icon";
import { CheckFillIcon } from "../fill/check-fill.icon";
import { CheckLightIcon } from "../light/check-light.icon";
import { CheckRegularIcon } from "../regular/check-regular.icon";
import { CheckThinIcon } from "../thin/check-thin.icon";

export const CheckIcon = memo(function Check(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheckBoldIcon,
      duotone: CheckDuotoneIcon,
      fill: CheckFillIcon,
      light: CheckLightIcon,
      regular: CheckRegularIcon,
      thin: CheckThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
