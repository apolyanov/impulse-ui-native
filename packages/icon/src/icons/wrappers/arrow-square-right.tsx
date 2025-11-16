import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareRightBold } from "../bold";
import { ArrowSquareRightDuotone } from "../duotone";
import { ArrowSquareRightFill } from "../fill";
import { ArrowSquareRightLight } from "../light";
import { ArrowSquareRightRegular } from "../regular";
import { ArrowSquareRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareRight = memo(function ArrowSquareRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareRightBold,
      duotone: ArrowSquareRightDuotone,
      fill: ArrowSquareRightFill,
      light: ArrowSquareRightLight,
      regular: ArrowSquareRightRegular,
      thin: ArrowSquareRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
