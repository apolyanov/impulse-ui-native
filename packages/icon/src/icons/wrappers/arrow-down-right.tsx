import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowDownRightBold } from "../bold";
import { ArrowDownRightDuotone } from "../duotone";
import { ArrowDownRightFill } from "../fill";
import { ArrowDownRightLight } from "../light";
import { ArrowDownRightRegular } from "../regular";
import { ArrowDownRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowDownRight = memo(function ArrowDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowDownRightBold,
      duotone: ArrowDownRightDuotone,
      fill: ArrowDownRightFill,
      light: ArrowDownRightLight,
      regular: ArrowDownRightRegular,
      thin: ArrowDownRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
