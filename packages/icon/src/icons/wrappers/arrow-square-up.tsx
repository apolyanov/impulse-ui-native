import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareUpBold } from "../bold";
import { ArrowSquareUpDuotone } from "../duotone";
import { ArrowSquareUpFill } from "../fill";
import { ArrowSquareUpLight } from "../light";
import { ArrowSquareUpRegular } from "../regular";
import { ArrowSquareUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareUp = memo(function ArrowSquareUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareUpBold,
      duotone: ArrowSquareUpDuotone,
      fill: ArrowSquareUpFill,
      light: ArrowSquareUpLight,
      regular: ArrowSquareUpRegular,
      thin: ArrowSquareUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
