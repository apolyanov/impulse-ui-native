import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockKeyOpenBoldIcon } from "../bold";
import { LockKeyOpenDuotoneIcon } from "../duotone";
import { LockKeyOpenFillIcon } from "../fill";
import { LockKeyOpenLightIcon } from "../light";
import { LockKeyOpenRegularIcon } from "../regular";
import { LockKeyOpenThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LockKeyOpenIcon = memo(function LockKeyOpen(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockKeyOpenBoldIcon,
      duotone: LockKeyOpenDuotoneIcon,
      fill: LockKeyOpenFillIcon,
      light: LockKeyOpenLightIcon,
      regular: LockKeyOpenRegularIcon,
      thin: LockKeyOpenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
