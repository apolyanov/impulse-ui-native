import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GreaterThanBoldIcon } from "../bold/greater-than-bold.icon";
import { GreaterThanDuotoneIcon } from "../duotone/greater-than-duotone.icon";
import { GreaterThanFillIcon } from "../fill/greater-than-fill.icon";
import { GreaterThanLightIcon } from "../light/greater-than-light.icon";
import { GreaterThanRegularIcon } from "../regular/greater-than-regular.icon";
import { GreaterThanThinIcon } from "../thin/greater-than-thin.icon";

export const GreaterThanIcon = memo(function GreaterThan(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GreaterThanBoldIcon,
      duotone: GreaterThanDuotoneIcon,
      fill: GreaterThanFillIcon,
      light: GreaterThanLightIcon,
      regular: GreaterThanRegularIcon,
      thin: GreaterThanThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
