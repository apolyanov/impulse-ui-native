import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsSplitBold } from "../bold";
import { ArrowsSplitDuotone } from "../duotone";
import { ArrowsSplitFill } from "../fill";
import { ArrowsSplitLight } from "../light";
import { ArrowsSplitRegular } from "../regular";
import { ArrowsSplitThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsSplit = memo(function ArrowsSplit(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsSplitBold,
      duotone: ArrowsSplitDuotone,
      fill: ArrowsSplitFill,
      light: ArrowsSplitLight,
      regular: ArrowsSplitRegular,
      thin: ArrowsSplitThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
