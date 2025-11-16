import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareUpLeftBold } from "../bold";
import { ArrowSquareUpLeftDuotone } from "../duotone";
import { ArrowSquareUpLeftFill } from "../fill";
import { ArrowSquareUpLeftLight } from "../light";
import { ArrowSquareUpLeftRegular } from "../regular";
import { ArrowSquareUpLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareUpLeft = memo(function ArrowSquareUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareUpLeftBold,
      duotone: ArrowSquareUpLeftDuotone,
      fill: ArrowSquareUpLeftFill,
      light: ArrowSquareUpLeftLight,
      regular: ArrowSquareUpLeftRegular,
      thin: ArrowSquareUpLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
