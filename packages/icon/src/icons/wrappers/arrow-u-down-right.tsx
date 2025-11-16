import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowUDownRightBold } from "../bold";
import { ArrowUDownRightDuotone } from "../duotone";
import { ArrowUDownRightFill } from "../fill";
import { ArrowUDownRightLight } from "../light";
import { ArrowUDownRightRegular } from "../regular";
import { ArrowUDownRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowUDownRight = memo(function ArrowUDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUDownRightBold,
      duotone: ArrowUDownRightDuotone,
      fill: ArrowUDownRightFill,
      light: ArrowUDownRightLight,
      regular: ArrowUDownRightRegular,
      thin: ArrowUDownRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
