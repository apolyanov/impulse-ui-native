import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareInBold } from "../bold";
import { ArrowSquareInDuotone } from "../duotone";
import { ArrowSquareInFill } from "../fill";
import { ArrowSquareInLight } from "../light";
import { ArrowSquareInRegular } from "../regular";
import { ArrowSquareInThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareIn = memo(function ArrowSquareIn(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareInBold,
      duotone: ArrowSquareInDuotone,
      fill: ArrowSquareInFill,
      light: ArrowSquareInLight,
      regular: ArrowSquareInRegular,
      thin: ArrowSquareInThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
