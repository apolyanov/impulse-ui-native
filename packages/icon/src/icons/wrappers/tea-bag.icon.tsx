import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TeaBagBoldIcon } from "../bold/tea-bag-bold.icon";
import { TeaBagDuotoneIcon } from "../duotone/tea-bag-duotone.icon";
import { TeaBagFillIcon } from "../fill/tea-bag-fill.icon";
import { TeaBagLightIcon } from "../light/tea-bag-light.icon";
import { TeaBagRegularIcon } from "../regular/tea-bag-regular.icon";
import { TeaBagThinIcon } from "../thin/tea-bag-thin.icon";

export const TeaBagIcon = memo(function TeaBag(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TeaBagBoldIcon,
      duotone: TeaBagDuotoneIcon,
      fill: TeaBagFillIcon,
      light: TeaBagLightIcon,
      regular: TeaBagRegularIcon,
      thin: TeaBagThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
