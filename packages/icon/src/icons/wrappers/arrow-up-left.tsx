import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowUpLeftBold } from "../bold";
import { ArrowUpLeftDuotone } from "../duotone";
import { ArrowUpLeftFill } from "../fill";
import { ArrowUpLeftLight } from "../light";
import { ArrowUpLeftRegular } from "../regular";
import { ArrowUpLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowUpLeft = memo(function ArrowUpLeft(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUpLeftBold,
      duotone: ArrowUpLeftDuotone,
      fill: ArrowUpLeftFill,
      light: ArrowUpLeftLight,
      regular: ArrowUpLeftRegular,
      thin: ArrowUpLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
