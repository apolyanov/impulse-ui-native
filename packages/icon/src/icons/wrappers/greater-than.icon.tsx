import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GreaterThanBoldIcon } from "../bold";
import { GreaterThanDuotoneIcon } from "../duotone";
import { GreaterThanFillIcon } from "../fill";
import { GreaterThanLightIcon } from "../light";
import { GreaterThanRegularIcon } from "../regular";
import { GreaterThanThinIcon } from "../thin";

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
