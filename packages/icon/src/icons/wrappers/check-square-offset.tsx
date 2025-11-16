import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CheckSquareOffsetBold } from "../bold";
import { CheckSquareOffsetDuotone } from "../duotone";
import { CheckSquareOffsetFill } from "../fill";
import { CheckSquareOffsetLight } from "../light";
import { CheckSquareOffsetRegular } from "../regular";
import { CheckSquareOffsetThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CheckSquareOffset = memo(function CheckSquareOffset(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheckSquareOffsetBold,
      duotone: CheckSquareOffsetDuotone,
      fill: CheckSquareOffsetFill,
      light: CheckSquareOffsetLight,
      regular: CheckSquareOffsetRegular,
      thin: CheckSquareOffsetThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
