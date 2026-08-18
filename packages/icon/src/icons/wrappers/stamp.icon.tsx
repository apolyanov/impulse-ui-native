import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StampBoldIcon } from "../bold/stamp-bold.icon";
import { StampDuotoneIcon } from "../duotone/stamp-duotone.icon";
import { StampFillIcon } from "../fill/stamp-fill.icon";
import { StampLightIcon } from "../light/stamp-light.icon";
import { StampRegularIcon } from "../regular/stamp-regular.icon";
import { StampThinIcon } from "../thin/stamp-thin.icon";

export const StampIcon = memo(function Stamp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StampBoldIcon,
      duotone: StampDuotoneIcon,
      fill: StampFillIcon,
      light: StampLightIcon,
      regular: StampRegularIcon,
      thin: StampThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
