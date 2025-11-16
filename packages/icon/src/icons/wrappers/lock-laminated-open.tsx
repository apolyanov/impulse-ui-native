import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockLaminatedOpenBold } from "../bold";
import { LockLaminatedOpenDuotone } from "../duotone";
import { LockLaminatedOpenFill } from "../fill";
import { LockLaminatedOpenLight } from "../light";
import { LockLaminatedOpenRegular } from "../regular";
import { LockLaminatedOpenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LockLaminatedOpen = memo(function LockLaminatedOpen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockLaminatedOpenBold,
      duotone: LockLaminatedOpenDuotone,
      fill: LockLaminatedOpenFill,
      light: LockLaminatedOpenLight,
      regular: LockLaminatedOpenRegular,
      thin: LockLaminatedOpenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
