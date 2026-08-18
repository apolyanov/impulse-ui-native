import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SealBoldIcon } from "../bold/seal-bold.icon";
import { SealDuotoneIcon } from "../duotone/seal-duotone.icon";
import { SealFillIcon } from "../fill/seal-fill.icon";
import { SealLightIcon } from "../light/seal-light.icon";
import { SealRegularIcon } from "../regular/seal-regular.icon";
import { SealThinIcon } from "../thin/seal-thin.icon";

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
