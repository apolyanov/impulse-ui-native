import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LockKeyOpenBoldIcon } from "../bold/lock-key-open-bold.icon";
import { LockKeyOpenDuotoneIcon } from "../duotone/lock-key-open-duotone.icon";
import { LockKeyOpenFillIcon } from "../fill/lock-key-open-fill.icon";
import { LockKeyOpenLightIcon } from "../light/lock-key-open-light.icon";
import { LockKeyOpenRegularIcon } from "../regular/lock-key-open-regular.icon";
import { LockKeyOpenThinIcon } from "../thin/lock-key-open-thin.icon";

export const LockKeyOpenIcon = memo(function LockKeyOpen(
  props: IconWrapperProps,
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
