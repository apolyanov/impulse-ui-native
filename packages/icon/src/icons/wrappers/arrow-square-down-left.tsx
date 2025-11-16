import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareDownLeftBold } from "../bold";
import { ArrowSquareDownLeftDuotone } from "../duotone";
import { ArrowSquareDownLeftFill } from "../fill";
import { ArrowSquareDownLeftLight } from "../light";
import { ArrowSquareDownLeftRegular } from "../regular";
import { ArrowSquareDownLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareDownLeft = memo(function ArrowSquareDownLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareDownLeftBold,
      duotone: ArrowSquareDownLeftDuotone,
      fill: ArrowSquareDownLeftFill,
      light: ArrowSquareDownLeftLight,
      regular: ArrowSquareDownLeftRegular,
      thin: ArrowSquareDownLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
