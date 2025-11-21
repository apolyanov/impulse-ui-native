import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SealBoldIcon } from "../bold";
import { SealDuotoneIcon } from "../duotone";
import { SealFillIcon } from "../fill";
import { SealLightIcon } from "../light";
import { SealRegularIcon } from "../regular";
import { SealThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SealIcon = memo(function Seal(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SealBoldIcon,
      duotone: SealDuotoneIcon,
      fill: SealFillIcon,
      light: SealLightIcon,
      regular: SealRegularIcon,
      thin: SealThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
