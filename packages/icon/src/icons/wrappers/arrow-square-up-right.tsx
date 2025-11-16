import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareUpRightBold } from "../bold";
import { ArrowSquareUpRightDuotone } from "../duotone";
import { ArrowSquareUpRightFill } from "../fill";
import { ArrowSquareUpRightLight } from "../light";
import { ArrowSquareUpRightRegular } from "../regular";
import { ArrowSquareUpRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareUpRight = memo(function ArrowSquareUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareUpRightBold,
      duotone: ArrowSquareUpRightDuotone,
      fill: ArrowSquareUpRightFill,
      light: ArrowSquareUpRightLight,
      regular: ArrowSquareUpRightRegular,
      thin: ArrowSquareUpRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
