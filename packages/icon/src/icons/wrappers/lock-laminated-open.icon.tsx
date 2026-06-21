import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LockLaminatedOpenBoldIcon } from "../bold";
import { LockLaminatedOpenDuotoneIcon } from "../duotone";
import { LockLaminatedOpenFillIcon } from "../fill";
import { LockLaminatedOpenLightIcon } from "../light";
import { LockLaminatedOpenRegularIcon } from "../regular";
import { LockLaminatedOpenThinIcon } from "../thin";

export const LockLaminatedOpenIcon = memo(function LockLaminatedOpen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockLaminatedOpenBoldIcon,
      duotone: LockLaminatedOpenDuotoneIcon,
      fill: LockLaminatedOpenFillIcon,
      light: LockLaminatedOpenLightIcon,
      regular: LockLaminatedOpenRegularIcon,
      thin: LockLaminatedOpenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
