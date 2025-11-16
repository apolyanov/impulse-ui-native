import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowUUpLeftBold } from "../bold";
import { ArrowUUpLeftDuotone } from "../duotone";
import { ArrowUUpLeftFill } from "../fill";
import { ArrowUUpLeftLight } from "../light";
import { ArrowUUpLeftRegular } from "../regular";
import { ArrowUUpLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowUUpLeft = memo(function ArrowUUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUUpLeftBold,
      duotone: ArrowUUpLeftDuotone,
      fill: ArrowUUpLeftFill,
      light: ArrowUUpLeftLight,
      regular: ArrowUUpLeftRegular,
      thin: ArrowUUpLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
