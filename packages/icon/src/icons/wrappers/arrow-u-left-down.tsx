import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowULeftDownBold } from "../bold";
import { ArrowULeftDownDuotone } from "../duotone";
import { ArrowULeftDownFill } from "../fill";
import { ArrowULeftDownLight } from "../light";
import { ArrowULeftDownRegular } from "../regular";
import { ArrowULeftDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowULeftDown = memo(function ArrowULeftDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowULeftDownBold,
      duotone: ArrowULeftDownDuotone,
      fill: ArrowULeftDownFill,
      light: ArrowULeftDownLight,
      regular: ArrowULeftDownRegular,
      thin: ArrowULeftDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
