import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareDownBold } from "../bold";
import { ArrowSquareDownDuotone } from "../duotone";
import { ArrowSquareDownFill } from "../fill";
import { ArrowSquareDownLight } from "../light";
import { ArrowSquareDownRegular } from "../regular";
import { ArrowSquareDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareDown = memo(function ArrowSquareDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareDownBold,
      duotone: ArrowSquareDownDuotone,
      fill: ArrowSquareDownFill,
      light: ArrowSquareDownLight,
      regular: ArrowSquareDownRegular,
      thin: ArrowSquareDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
