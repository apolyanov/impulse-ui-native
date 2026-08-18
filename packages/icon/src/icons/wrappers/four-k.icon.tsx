import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FourKBoldIcon } from "../bold/four-k-bold.icon";
import { FourKDuotoneIcon } from "../duotone/four-k-duotone.icon";
import { FourKFillIcon } from "../fill/four-k-fill.icon";
import { FourKLightIcon } from "../light/four-k-light.icon";
import { FourKRegularIcon } from "../regular/four-k-regular.icon";
import { FourKThinIcon } from "../thin/four-k-thin.icon";

export const FourKIcon = memo(function FourK(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FourKBoldIcon,
      duotone: FourKDuotoneIcon,
      fill: FourKFillIcon,
      light: FourKLightIcon,
      regular: FourKRegularIcon,
      thin: FourKThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
