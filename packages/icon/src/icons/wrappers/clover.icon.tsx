import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloverBoldIcon } from "../bold/clover-bold.icon";
import { CloverDuotoneIcon } from "../duotone/clover-duotone.icon";
import { CloverFillIcon } from "../fill/clover-fill.icon";
import { CloverLightIcon } from "../light/clover-light.icon";
import { CloverRegularIcon } from "../regular/clover-regular.icon";
import { CloverThinIcon } from "../thin/clover-thin.icon";

export const CloverIcon = memo(function Clover(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloverBoldIcon,
      duotone: CloverDuotoneIcon,
      fill: CloverFillIcon,
      light: CloverLightIcon,
      regular: CloverRegularIcon,
      thin: CloverThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
