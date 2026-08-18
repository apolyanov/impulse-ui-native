import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LessThanBoldIcon } from "../bold/less-than-bold.icon";
import { LessThanDuotoneIcon } from "../duotone/less-than-duotone.icon";
import { LessThanFillIcon } from "../fill/less-than-fill.icon";
import { LessThanLightIcon } from "../light/less-than-light.icon";
import { LessThanRegularIcon } from "../regular/less-than-regular.icon";
import { LessThanThinIcon } from "../thin/less-than-thin.icon";

export const LessThanIcon = memo(function LessThan(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LessThanBoldIcon,
      duotone: LessThanDuotoneIcon,
      fill: LessThanFillIcon,
      light: LessThanLightIcon,
      regular: LessThanRegularIcon,
      thin: LessThanThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
