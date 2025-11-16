import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowUDownLeftBold } from "../bold";
import { ArrowUDownLeftDuotone } from "../duotone";
import { ArrowUDownLeftFill } from "../fill";
import { ArrowUDownLeftLight } from "../light";
import { ArrowUDownLeftRegular } from "../regular";
import { ArrowUDownLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowUDownLeft = memo(function ArrowUDownLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUDownLeftBold,
      duotone: ArrowUDownLeftDuotone,
      fill: ArrowUDownLeftFill,
      light: ArrowUDownLeftLight,
      regular: ArrowUDownLeftRegular,
      thin: ArrowUDownLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
