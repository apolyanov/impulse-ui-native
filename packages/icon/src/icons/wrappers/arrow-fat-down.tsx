import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatDownBold } from "../bold";
import { ArrowFatDownDuotone } from "../duotone";
import { ArrowFatDownFill } from "../fill";
import { ArrowFatDownLight } from "../light";
import { ArrowFatDownRegular } from "../regular";
import { ArrowFatDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatDown = memo(function ArrowFatDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatDownBold,
      duotone: ArrowFatDownDuotone,
      fill: ArrowFatDownFill,
      light: ArrowFatDownLight,
      regular: ArrowFatDownRegular,
      thin: ArrowFatDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
