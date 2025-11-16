import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareDownRightBold } from "../bold";
import { ArrowSquareDownRightDuotone } from "../duotone";
import { ArrowSquareDownRightFill } from "../fill";
import { ArrowSquareDownRightLight } from "../light";
import { ArrowSquareDownRightRegular } from "../regular";
import { ArrowSquareDownRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareDownRight = memo(function ArrowSquareDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareDownRightBold,
      duotone: ArrowSquareDownRightDuotone,
      fill: ArrowSquareDownRightFill,
      light: ArrowSquareDownRightLight,
      regular: ArrowSquareDownRightRegular,
      thin: ArrowSquareDownRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
