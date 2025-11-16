import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareLeftBold } from "../bold";
import { ArrowSquareLeftDuotone } from "../duotone";
import { ArrowSquareLeftFill } from "../fill";
import { ArrowSquareLeftLight } from "../light";
import { ArrowSquareLeftRegular } from "../regular";
import { ArrowSquareLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareLeft = memo(function ArrowSquareLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareLeftBold,
      duotone: ArrowSquareLeftDuotone,
      fill: ArrowSquareLeftFill,
      light: ArrowSquareLeftLight,
      regular: ArrowSquareLeftRegular,
      thin: ArrowSquareLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
