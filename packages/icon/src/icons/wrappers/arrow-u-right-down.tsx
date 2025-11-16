import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowURightDownBold } from "../bold";
import { ArrowURightDownDuotone } from "../duotone";
import { ArrowURightDownFill } from "../fill";
import { ArrowURightDownLight } from "../light";
import { ArrowURightDownRegular } from "../regular";
import { ArrowURightDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowURightDown = memo(function ArrowURightDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowURightDownBold,
      duotone: ArrowURightDownDuotone,
      fill: ArrowURightDownFill,
      light: ArrowURightDownLight,
      regular: ArrowURightDownRegular,
      thin: ArrowURightDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
