import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SealCheckBoldIcon } from "../bold/seal-check-bold.icon";
import { SealCheckDuotoneIcon } from "../duotone/seal-check-duotone.icon";
import { SealCheckFillIcon } from "../fill/seal-check-fill.icon";
import { SealCheckLightIcon } from "../light/seal-check-light.icon";
import { SealCheckRegularIcon } from "../regular/seal-check-regular.icon";
import { SealCheckThinIcon } from "../thin/seal-check-thin.icon";

export const SealCheckIcon = memo(function SealCheck(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SealCheckBoldIcon,
      duotone: SealCheckDuotoneIcon,
      fill: SealCheckFillIcon,
      light: SealCheckLightIcon,
      regular: SealCheckRegularIcon,
      thin: SealCheckThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
